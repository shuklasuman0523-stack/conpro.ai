import React from 'react';
import { HeroVideoBackground } from '../components/ui';
import { Contact, ClientJourney } from '../components';

const AgenticAIConsulting = () => {
    const journeySteps = [
        {
            title: "AI Readiness Assessment",
            description: "We evaluate your current data infrastructure, technical capabilities, and operational workflows to determine your readiness for autonomous AI integration."
        },
        {
            title: "Opportunity Identification",
            description: "Collaboratively, we pinpoint high-impact use cases where agentic AI can automate complex tasks, improve decision-making, and drive significant ROI."
        },
        {
            title: "Agent Design & Governance",
            description: "We architect the behavior, roles, and permission systems for your AI agents, establishing robust governance frameworks to ensure safe and effective autonomy."
        },
        {
            title: "Prototype & Pilot",
            description: "We develop a functional proof-of-concept to validate assumptions and demonstrate value in a controlled environment before full-scale deployment."
        },
        {
            title: "Scale & Optimization",
            description: "Deploying your agent workforce at scale, with continuous monitoring, fine-tuning, and learning loops to ensure they evolve with your business."
        }
    ];

    return (
        <main className="agentic-ai-consulting-page">
            <HeroVideoBackground className="page-hero">
                <div className="container">
                    <h1 className="section-title">Agentic AI Consulting</h1>
                    <p className="section-subtitle">
                        Empower your enterprise with autonomous, intelligent workforce solutions.
                    </p>
                </div>
            </HeroVideoBackground>

            <section className="service-details section-padding">
                <div className="container">
                    <div className="content-block">
                        <h2>The Future is Autonomous</h2>
                        <p>
                            Agentic AI represents the next leap in artificial intelligence—moving from chat interfaces to systems that can plan, reason, and execute tasks independently. Our consulting services guide you through this transformation, helping you build a digital workforce that augments human potential.
                        </p>
                        <p>
                            We specialize in designing multi-agent systems that can handle complex workflows, from supply chain optimization to automated customer support, ensuring your business stays ahead of the curve.
                        </p>
                    </div>
                </div>
            </section>

            <ClientJourney
                title="Your Journey to Autonomy"
                subtitle="A strategic roadmap to integrating Agentic AI into your organization"
                steps={journeySteps}
            />

            <Contact />
        </main>
    );
};

export default AgenticAIConsulting;
