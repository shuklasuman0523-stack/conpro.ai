import React, { useState, useRef, useEffect } from 'react';
import '../../styles/blog.css'; // We'll add styles here

// IndexedDB helper functions
const DB_NAME = 'VideoUploadDB';
const DB_VERSION = 1;
const STORE_NAME = 'videos';

const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
        };
    });
};

const saveVideoToDB = async (videoData) => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.add(videoData);
        
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

const getAllVideosFromDB = async () => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();
        
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
};

const deleteVideoFromDB = async (id) => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.delete(id);
        
        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
};

const VideoUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [uploadedVideos, setUploadedVideos] = useState([]);
    const [videoIndex, setVideoIndex] = useState(0);
    const fileInputRef = useRef(null);

    // Load video index from localStorage and videos from IndexedDB on component mount
    useEffect(() => {
        const loadVideos = async () => {
            try {
                const videos = await getAllVideosFromDB();
                setUploadedVideos(videos);
                
                const storedIndex = localStorage.getItem('videoIndex');
                if (storedIndex) {
                    setVideoIndex(parseInt(storedIndex, 10));
                } else if (videos.length > 0) {
                    // Set index based on highest video index
                    const maxIndex = Math.max(...videos.map(v => v.index));
                    setVideoIndex(maxIndex);
                }
            } catch (error) {
                console.error('Error loading videos:', error);
            }
        };
        
        loadVideos();
    }, []);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        validateAndSetFile(file);
    };

    const validateAndSetFile = (file) => {
        if (file && file.type.startsWith('video/')) {
            setSelectedFile(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        } else {
            alert('Please select a valid video file.');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        validateAndSetFile(file);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            try {
                // Generate indexed filename
                const currentIndex = videoIndex + 1;
                const indexedFilename = `video_${currentIndex}_${selectedFile.name}`;
                
                // Read file as ArrayBuffer for better storage
                const arrayBuffer = await selectedFile.arrayBuffer();
                
                // Create video entry with metadata
                const videoEntry = {
                    index: currentIndex,
                    originalName: selectedFile.name,
                    indexedName: indexedFilename,
                    size: selectedFile.size,
                    type: selectedFile.type,
                    uploadDate: new Date().toISOString(),
                    data: arrayBuffer, // Store as ArrayBuffer
                };

                // Save to IndexedDB for browser storage
                await saveVideoToDB(videoEntry);
                
                // ALSO save permanently to user's computer
                const blob = new Blob([arrayBuffer], { type: selectedFile.type });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = indexedFilename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
                
                // Update state
                const updatedVideos = await getAllVideosFromDB();
                setUploadedVideos(updatedVideos);
                setVideoIndex(currentIndex);

                // Store only the index in localStorage
                localStorage.setItem('videoIndex', currentIndex.toString());

                alert(`Video #${currentIndex} uploaded and saved permanently to your Downloads folder!`);
                
                // Reset the form
                handleRemove();
            } catch (error) {
                console.error('Error uploading video:', error);
                alert('Failed to upload video. Please try again.');
            }
        }
    };

    const handleDownloadVideo = (video) => {
        try {
            // Convert ArrayBuffer back to Blob
            const blob = new Blob([video.data], { type: video.type });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = video.indexedName;
            document.body.appendChild(a);
            a.click();
            
            // Clean up
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error downloading video:', error);
            alert('Failed to download video.');
        }
    };

    const handleDeleteVideo = async (id) => {
        if (window.confirm('Are you sure you want to delete this video?')) {
            try {
                await deleteVideoFromDB(id);
                const updatedVideos = await getAllVideosFromDB();
                setUploadedVideos(updatedVideos);
            } catch (error) {
                console.error('Error deleting video:', error);
                alert('Failed to delete video.');
            }
        }
    };

    const getVideoUrl = (video) => {
        if (video.data) {
            const blob = new Blob([video.data], { type: video.type });
            return URL.createObjectURL(blob);
        }
        return null;
    };

    const handleRemove = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <section className="video-upload-section">
            <div className="container">
                <div className="video-upload-card">
                    <div className="card-header">
                        <h3>Share Your Insight</h3>
                        <p>Upload a video to contribute to our community.</p>
                    </div>

                    <div
                        className={`upload-area ${isDragging ? 'dragging' : ''} ${previewUrl ? 'has-content' : ''}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        {previewUrl ? (
                            <div className="video-preview-container">
                                <video src={previewUrl} controls className="video-preview" />
                                <button className="remove-btn" onClick={handleRemove}>×</button>
                            </div>
                        ) : (
                            <div className="upload-placeholder" onClick={() => fileInputRef.current.click()}>
                                <div className="upload-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="17 8 12 3 7 8" />
                                        <line x1="12" y1="3" x2="12" y2="15" />
                                    </svg>
                                </div>
                                <p>Drag & drop or Click to Browse</p>
                                <span className="file-hint">Supports MP4, WebM up to 50MB</span>
                            </div>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileSelect}
                            accept="video/*"
                            style={{ display: 'none' }}
                        />
                    </div>

                    <div className="card-actions">
                        <button
                            className="btn-primary upload-btn"
                            onClick={handleUpload}
                            disabled={!selectedFile}
                        >
                            Upload Video (Index: {videoIndex + 1})
                        </button>
                    </div>
                </div>

                {/* Display uploaded videos list */}
                {uploadedVideos.length > 0 && (
                    <div className="uploaded-videos-box">
                        <div className="uploaded-videos-header">
                            <h3>📹 Uploaded Videos ({uploadedVideos.length})</h3>
                            <p>Click to play or download your videos</p>
                        </div>
                        <div className="videos-list">
                            {uploadedVideos.map((video) => (
                                <div key={video.id} className="video-list-item">
                                    <div className="video-player-section">
                                        <video 
                                            controls 
                                            className="video-thumbnail"
                                            src={getVideoUrl(video)}
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className="video-info-section">
                                        <div className="video-item-header">
                                            <span className="video-index">#{video.index}</span>
                                            <span className="video-date">
                                                {new Date(video.uploadDate).toLocaleString()}
                                            </span>
                                        </div>
                                        <h4 className="video-filename">{video.originalName}</h4>
                                        <p className="video-indexed-name">Saved as: {video.indexedName}</p>
                                        <p className="video-size">Size: {(video.size / (1024 * 1024)).toFixed(2)} MB</p>
                                        
                                        <div className="video-actions">
                                            <button 
                                                className="btn-download"
                                                onClick={() => handleDownloadVideo(video)}
                                                title="Download video"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                    <polyline points="7 10 12 15 17 10" />
                                                    <line x1="12" y1="15" x2="12" y2="3" />
                                                </svg>
                                                Download
                                            </button>
                                            <button 
                                                className="btn-delete"
                                                onClick={() => handleDeleteVideo(video.id)}
                                                title="Delete video"
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="3 6 5 6 21 6" />
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                </svg>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default VideoUpload;
