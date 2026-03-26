'use client'

import { useEffect, useRef, useState } from 'react'

export default function HowItWorks() {
    const steps = [
        {
            id: "01",
            title: "Créez votre profil",
            desc: "Compétences, TJM, portfolio. En quelques instants, vous serez plus proche de votre prochaine mission.",
        },
        {
            id: "02",
            title: "Recevez des missions",
            desc: "Nous filtrons les opportunités pour ne vous proposer que le meilleur. Nous soumettrons votre profil sous 48h à nos entreprises.",
        },
        {
            id: "03",
            title: "Collaborez, gagnez",
            desc: "Nous vous trouvons une mission, vous gardez 95% de votre valeur. Une commission fixe de 5% HT, prélevée mensuellement.",
        }
    ]

    const titleRef = useRef<HTMLHeadingElement>(null)
    const [titleVisible, setTitleVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setTitleVisible(true)
            },
            { threshold: 0.5 }
        )
        if (titleRef.current) observer.observe(titleRef.current)
        return () => { if (titleRef.current) observer.unobserve(titleRef.current) }
    }, [])

    return (
        <section className="section" id="notre-methode" data-theme="light" style={{ background: '#FFFFFB', color: '#111' }}>
            <div className="container">
                <div className="reveal-section">
                    <span style={{
                        color: '#FF4000',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem',
                        display: 'block',
                        fontFamily: 'var(--font-syne)',
                        textTransform: 'uppercase'
                    }}>/ NOTRE MÉTHODE</span>
                    <h2
                        ref={titleRef}
                        className="section-title"
                        style={{ color: '#111', fontSize: '3.5rem' }}
                    >
                        Le processus<br /><span style={{ color: '#111', fontWeight: 'bold', fontStyle: 'italic' }}>en trois étapes.</span>
                    </h2>
                </div>

                <div className="process-sequence-container reveal-section" style={{ position: 'relative' }}>
                    {/* Visual Path/Line */}
                    <div className="process-path-line" />

                    <div className="d-flex flex-row gap-8 flex-wrap md-flex-nowrap reveal-section">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                style={{
                                    flex: '1',
                                    minWidth: '300px',
                                    padding: '3.5rem',
                                    border: '1px solid rgba(17,17,17,0.05)',
                                    background: 'rgba(17,17,17,0.02)',
                                    borderRadius: '32px',
                                    transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                                    cursor: 'default',
                                    position: 'relative',
                                    zIndex: 2,
                                    animationDelay: `${index * 0.2}s`
                                }}
                                className={`how-step-card reveal-up`}
                            >
                                <div className="step-number-bubble">{step.id}</div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-syne)', transition: 'inherit', color: '#111' }} className="step-title">{step.title}</h3>
                                <p style={{ color: '#111', fontSize: '1rem', lineHeight: 1.6, opacity: 0.6, transition: 'inherit' }} className="step-desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .process-sequence-container {
                    padding: 2rem 0;
                }
                @media (min-width: 768px) {
                }
                .step-number-bubble {
                    width: 60px;
                    height: 60px;
                    background: #111;
                    color: #FFFFFB;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-size: 1.25rem;
                    font-weight: 800;
                    margin-bottom: 2rem;
                    transition: all 0.5s ease;
                    border: 4px solid #FFFFFB;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .how-step-card:hover {
                    background: #111 !important;
                    transform: translateY(-12px);
                    border-color: #111 !important;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                .how-step-card:hover .step-number-bubble {
                    background: #FFFFFB;
                    color: #111;
                    transform: scale(1.1);
                    border-color: #111;
                }
                .how-step-card:hover .step-title,
                .how-step-card:hover .step-desc {
                    color: #FFFFFB !important;
                    opacity: 1 !important;
                }
                @media (max-width: 768px) {
                    .how-step-card {
                        padding: 2rem !important;
                        min-width: 100% !important;
                    }
                    .section-title {
                        font-size: 2.2rem !important;
                    }
                }
            `}</style>
        </section>
    )
}
