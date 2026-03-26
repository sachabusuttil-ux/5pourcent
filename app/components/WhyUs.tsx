'use client'

import { useEffect, useRef, useState } from 'react'

export default function WhyUs() {
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
        <section className="section" id="nos-choix" data-theme="dark">
            <div className="container reveal-section">
                <div className="text-left" style={{ marginBottom: '4rem' }}>
                    <span style={{
                        color: '#FF4000',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem',
                        display: 'block',
                        fontFamily: 'var(--font-syne)',
                        textTransform: 'uppercase'
                    }}>/ NOS CHOIX</span>
                    <h2
                        ref={titleRef}
                        className={`section-title reveal-up ${titleVisible ? 'active' : ''}`}
                        style={{ color: '#FFFFFB' }}
                    >
                        Le choix<br /><span style={{ opacity: 1 }}>du modèle juste.</span>
                    </h2>
                    <p className="why-us-intro" style={{
                        color: '#FFFFFB',
                        fontSize: '1.25rem',
                        maxWidth: '600px',
                        lineHeight: 1.5,
                        opacity: 0.8,
                        marginTop: '-2rem'
                    }}>
                        Nous ne sommes pas une simple plateforme de mise en relation. Nous portons une vision de l'intermédiation sobre et équitable.
                    </p>
                </div>

                <div className="overflow-hidden" style={{ borderRadius: '32px' }}>
                    <div style={{ padding: '0' }}>
                        <div className="d-grid gap-0 nos-choix-grid" style={{ gridTemplateColumns: '1fr 1.5fr 1.5fr' }}>
                            {/* Header Row */}
                            <div className="grid-header" style={{ padding: '2rem', opacity: 0.3, fontWeight: 800, textTransform: 'uppercase', fontSize: '0.75rem', borderBottom: '1px solid rgba(255,255,251,0.05)' }}>Critères</div>
                            <div className="text-center grid-header" style={{ padding: '2rem', opacity: 0.3, fontWeight: 800, textTransform: 'uppercase', fontSize: '0.75rem', borderBottom: '1px solid rgba(255,255,251,0.05)' }}>Logiques dominantes du marché</div>
                            <div className="text-center grid-header" style={{ padding: '2rem', background: '#FFFFFB', color: '#111', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.75rem', borderBottom: '1px solid rgba(0,0,0,0.05)', transform: 'scale(1.02)', position: 'relative', zIndex: 2 }}>Nos choix</div>

                            {/* Data Rows */}
                            <div className="grid-row-label" style={{ padding: '2.5rem 2rem', borderBottom: '1px solid rgba(255,255,251,0.03)' }}>
                                <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>Commission plateforme</p>
                            </div>
                            <div className="text-center d-flex items-center justify-center grid-cell-market" style={{ padding: '2.5rem 2rem', borderBottom: '1px solid rgba(255,255,251,0.03)', opacity: 0.5 }}>15/25 % variable</div>
                            <div className="text-center d-flex items-center justify-center grid-cell-ours" style={{ padding: '2.5rem 2rem', background: '#FFFFFB', color: '#111', fontWeight: 800, fontSize: '1.25rem', borderBottom: '1px solid rgba(0,0,0,0.05)', transform: 'scale(1.02)', position: 'relative', zIndex: 2 }}>5 % HT fixe</div>

                            <div className="grid-row-label" style={{ padding: '2.5rem 2rem', borderBottom: '1px solid rgba(255,255,251,0.03)' }}>
                                <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>Sélection des profils</p>
                            </div>
                            <div className="text-center d-flex items-center justify-center grid-cell-market" style={{ padding: '2.5rem 2rem', borderBottom: '1px solid rgba(255,255,251,0.03)', opacity: 0.5 }}>Large vivier et matchmaking robotisé</div>
                            <div className="text-center d-flex items-center justify-center grid-cell-ours" style={{ padding: '2.5rem 2rem', background: '#FFFFFB', color: '#111', fontWeight: 800, fontSize: '1.25rem', borderBottom: '1px solid rgba(0,0,0,0.05)', transform: 'scale(1.02)', position: 'relative', zIndex: 2 }}>Moins de profils, mieux alignés</div>

                            <div className="grid-row-label" style={{ padding: '2.5rem 2rem' }}>
                                <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>Lisibilité du cadre</p>
                            </div>
                            <div className="text-center d-flex items-center justify-center grid-cell-market" style={{ padding: '2.5rem 2rem', opacity: 0.5 }}>Structure complexe et segmentée</div>
                            <div className="text-center d-flex items-center justify-center grid-cell-ours" style={{ padding: '2.5rem 2rem', background: '#FFFFFB', color: '#111', fontWeight: 800, fontSize: '1.25rem', transform: 'scale(1.02)', position: 'relative', zIndex: 2 }}>Règles simples et transparente</div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .nos-choix-grid {
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 2rem !important;
                        background: transparent !important;
                        border: none !important;
                    }
                    .grid-header, .grid-cell-market {
                        display: none !important;
                    }
                    .grid-row-label {
                        padding: 0 !important;
                        background: transparent !important;
                        border: none !important;
                        text-align: center !important;
                        margin-bottom: -1rem !important;
                        z-index: 5;
                        position: relative;
                    }
                    .grid-row-label p {
                        font-size: 0.8rem !important;
                        color: #FFFFFB !important;
                        text-transform: uppercase;
                        letter-spacing: 0.2rem;
                        font-weight: 800 !important;
                        background: transparent !important;
                        padding: 0 !important;
                        width: 100% !important;
                        opacity: 0.4;
                    }
                    .grid-cell-ours {
                        padding: 3.5rem 2rem !important;
                        background: transparent !important;
                        color: #FFFFFB !important;
                        font-size: 1.4rem !important;
                        margin: 0 !important;
                        transform: none !important;
                        border-radius: 24px !important;
                        border: 1px solid rgba(255, 255, 251, 0.1) !important;
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 0.5rem !important;
                        text-align: center !important;
                        justify-content: center !important;
                        line-height: 1.3 !important;
                    }
                    .grid-cell-ours::before {
                        content: none !important;
                    }
                    .section-title {
                        font-size: 2.5rem !important;
                        margin-bottom: 1.5rem !important;
                    }
                    .why-us-intro {
                        margin-top: 0 !important;
                        font-size: 1.15rem !important;
                        margin-bottom: 3rem !important;
                    }
                }
            `}</style>
        </section>
    )
}
