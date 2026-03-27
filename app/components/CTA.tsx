'use client'

import Link from 'next/link'

export default function CTA() {
    return (
        <section className="section" id="formulaire" style={{ background: '#111111', padding: 'clamp(5rem, 12vw, 15rem) 0', overflow: 'hidden' }}>
            <div className="container">
                <div className="cta-wrapper reveal-section" style={{ maxWidth: '1200px' }}>
                    <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '4rem' }} />

                    <div className="cta-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <h2 className="cta-heading">
                            Prêt(e) à faire <br />
                            la différence ?
                        </h2>
                        <p className="cta-subtitle">
                            Rejoignez la plateforme qui remet <br />
                            l'humain et l'expertise au centre
                        </p>

                        <a
                            href="https://form.typeform.com/to/rYRR2F7c"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="big-contact-btn"
                        >
                            <span>Je candidate</span>
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .cta-heading {
                    font-size: clamp(2.5rem, 8vw, 5.5rem);
                    line-height: 1.1;
                    font-weight: 500;
                    font-family: var(--font-syne);
                    color: #FFFFFB;
                    text-align: left;
                    margin: 0;
                }
                .cta-subtitle {
                    font-size: clamp(1.2rem, 3vw, 1.8rem);
                    font-family: var(--font-syne);
                    color: #FFFFFB;
                    opacity: 0.8;
                    max-width: 800px;
                    line-height: 1.4;
                    margin: 0;
                }
                .big-contact-btn {
                    font-size: clamp(2.5rem, 8vw, 5.5rem);
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
                .big-contact-btn::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: #ff5d36;
                    transform: scaleX(1);
                    transform-origin: left;
                    transition: transform 0.3s ease;
                }
                .big-contact-btn:hover {
                    opacity: 0.8;
                }
                .big-contact-btn:hover .arrow-icon {
                    transform: translate(10px, -10px);
                }
                .arrow-icon {
                    transition: transform 0.3s ease;
                }
                @media (max-width: 768px) {
                    .cta-heading {
                        line-height: 1.2;
                    }
                    .section {
                        padding: 5rem 0 !important;
                    }
                }
            `}</style>
        </section>
    )
}
