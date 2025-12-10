import React, { useState, useRef } from 'react';
import '../../styles/blog.css'; // We'll add styles here

const VideoUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

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

    const handleUpload = () => {
        if (selectedFile) {
            // Create a fake "upload" to local machine (download)
            const url = URL.createObjectURL(selectedFile);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = selectedFile.name; // Save with original filename
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            alert(`Video saved to your device: ${selectedFile.name}`);
        }
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
                            Save to Device
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoUpload;
