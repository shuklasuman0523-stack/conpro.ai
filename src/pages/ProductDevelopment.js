import React from 'react';
import { HeroVideoBackground } from '../components/ui';
import { Contact, ClientJourney } from '../components';

const ProductDevelopment = () => {
    const journeySteps = [
        {
            title: "Technical Discovery",
            description: "We analyze your requirements and select the optimal technology stack, ensuring scalability, security, and future-readiness for your solution."
        },
        {
            title: "Architecture & Design",
            description: "Creating a robust system architecture and intuitive UI/UX designs that serve as the blueprint for high-performance development."
        },
        {
            title: "Agile Development",
            description: "Our engineering teams work in iterative sprints, delivering functional code frequently to ensure transparency and rapid feedback loops."
        },
        {
            title: "Quality Assurance",
            description: "Rigorous automated and manual testing processes to guarantee your product is bug-free, secure, and performs flawlessly under load."
        },
        {
            title: "Deployment & DevOps",
            description: "Seamless production rollout with modern CI/CD pipelines, cloud infrastructure setup, and 24/7 monitoring systems."
        }
    ];

    return (
        <main className="product-development-page">
            <HeroVideoBackground className="page-hero">
                <div className="container">
                    <h1 className="section-title">Product Development Services</h1>
                    <p className="section-subtitle">
                        Engineering world-class AI solutions with precision and speed.
                    </p>
                </div>
            </HeroVideoBackground>

            <section className="service-details section-padding">
                <div className="container">
                    <div className="content-block">
                        <h2>Building the Future, Line by Line</h2>
                        <p>
                            We transform strategic vision into robust, scalable software. Our full-stack development teams are experts in modern AI technologies, ensuring your product is not just functional, but a technological asset that drives competitive advantage.
                        </p>
                        <p>
                            From custom LLM integrations to complex enterprise platforms, we uphold the highest standards of code quality and engineering excellence, delivering solutions that stand the test of time.
                        </p>
                    </div>
                </div>
            </section>

            <ClientJourney
                title="Engineering Lifecycle"
                subtitle="A rigorous path to production-grade software"
                steps={journeySteps}
            />

            <Contact />
        </main>
    );
};

export default ProductDevelopment;
