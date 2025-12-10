import React from 'react';
import { HeroVideoBackground } from '../components/ui';
import { Contact, ClientJourney } from '../components';

const ProductStrategy = () => {
    const journeySteps = [
        {
            title: "Market & User Research",
            description: "We dive deep into your market landscape and user behaviors to uncover unmet needs and validate product opportunities with data-driven insights."
        },
        {
            title: "Product Vision & Strategy",
            description: "Crafting a compelling product vision and strategic pillars that align with your business goals and differentiate you from the competition."
        },
        {
            title: "Roadmap Development",
            description: "Translating strategy into a prioritized, actionable roadmap. We define milestones, feature sets, and release schedules to maintain momentum."
        },
        {
            title: "Go-to-Market Planning",
            description: "Developing comprehensive launch strategies, including positioning, pricing, and channel distribution to maximize market impact."
        },
        {
            title: "Lifecycle Management",
            description: "Ongoing product health monitoring, feedback analysis, and iterative improvement to ensure sustained growth and user retention."
        }
    ];

    return (
        <main className="product-strategy-page">
            <HeroVideoBackground className="page-hero">
                <div className="container">
                    <h1 className="section-title">Product Strategy & Management</h1>
                    <p className="section-subtitle">
                        Turning visionary ideas into market-leading digital products.
                    </p>
                </div>
            </HeroVideoBackground>

            <section className="service-details section-padding">
                <div className="container">
                    <div className="content-block">
                        <h2>From Concept to Market Dominance</h2>
                        <p>
                            Great products don't happen by chance; they are the result of rigorous strategy and expert management. We partner with you to align your technology capabilities with genuine market needs, ensuring that every feature built delivers tangible value.
                        </p>
                        <p>
                            Our product experts act as an extension of your team, bringing frameworks and methodologies used by top-tier tech companies to streamline detailed requirements, user stories, and execution plans.
                        </p>
                    </div>
                </div>
            </section>

            <ClientJourney
                title="Our Strategic Process"
                subtitle="How we guide your product from idea to success"
                steps={journeySteps}
            />

            <Contact />
        </main>
    );
};

export default ProductStrategy;
