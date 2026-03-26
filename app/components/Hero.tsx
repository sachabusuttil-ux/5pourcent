'use client'



export default function Hero() {
    return (
        <section className="hero" data-theme="dark">

            {/* Marquee Section - Centered Absolute */}
            <div className="marquee-container">
                <div className="marquee-wrapper">
                    <div className="marquee-content-scroll">
                        <span className="hero-big-text" style={{ color: '#FFFFFB' }}>Faites la différence<span style={{ color: '#FF4000' }}>.</span></span>
                        <span className="hero-big-text" style={{ color: '#FFFFFB' }}>Faites la différence<span style={{ color: '#FF4000' }}>.</span></span>
                    </div>
                    <div className="marquee-content-scroll" aria-hidden="true">
                        <span className="hero-big-text" style={{ color: '#FFFFFB' }}>Faites la différence<span style={{ color: '#FF4000' }}>.</span></span>
                        <span className="hero-big-text" style={{ color: '#FFFFFB' }}>Faites la différence<span style={{ color: '#FF4000' }}>.</span></span>
                    </div>
                </div>
            </div>

            <div className="container d-flex flex-col items-start justify-end h-full hero-container" style={{ zIndex: 10, paddingBottom: '2rem', pointerEvents: 'none', height: '100%', minHeight: '100vh', justifyContent: 'flex-end' }}>

                <div style={{ maxWidth: '650px', pointerEvents: 'auto', marginBottom: '2vh' }}> {/* Significantly lowered from 12vh to 2vh to be at the bottom */}
                    <p className="hero-headline" style={{ fontSize: '2.5rem', color: '#FFFFFB', fontFamily: 'var(--font-syne)', fontWeight: 400, marginBottom: '3rem', lineHeight: 1.3 }}>
                        <span style={{ textDecoration: 'none' }}>5% de commission,</span> le choix d'une collaboration juste et pérenne.
                    </p>
                    <div className="d-flex gap-4">
                        <a
                            href="https://form.typeform.com/to/rYRR2F7c"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-cta-btn"
                        >
                            <span>Je candidate</span>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="hero-cta-arrow">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
            <style jsx>{`
                .hero-cta-btn {
                    font-size: clamp(1.5rem, 4vw, 2.5rem);
                    color: #ff5d36;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.3em;
                    font-family: var(--font-syne);
                    font-weight: 500;
                    transition: all 0.3s ease;
                    width: fit-content;
                    position: relative;
                }
                .hero-cta-btn::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: #ff5d36;
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }
                .hero-cta-btn:hover {
                    opacity: 0.8;
                }
                .hero-cta-btn:hover .hero-cta-arrow {
                    transform: translate(8px, -8px);
                }
                .hero-cta-arrow {
                    transition: transform 0.3s ease;
                }
                @media (max-width: 768px) {
                    .hero {
                        min-height: 80vh;
                    }
                    .marquee-container {
                        top: 35%;
                    }
                    .hero-big-text {
                        font-size: 25vw;
                    }
                    .hero-headline {
                        font-size: 1.8rem !important;
                        margin-bottom: 2rem !important;
                    }
                    .hero-container {
                        padding-bottom: 3rem !important;
                    }
                    .hero-cta-btn {
                        font-size: 1.8rem;
                    }
                }
            `}</style>
        </section>
    )
}
