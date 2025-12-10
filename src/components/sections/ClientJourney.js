import React from 'react';
import '../../styles/client-journey.css';

const ClientJourney = ({
    title = "Client Journey",
    subtitle = "Our proven process for delivering exceptional results",
    steps = []
}) => {
    return (
        <section className="client-journey section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                <div className="journey-timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="journey-step">
                            <div className="step-marker">
                                <span className="step-number">{step.marker || step.year || index + 1}</span>
                            </div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientJourney;
