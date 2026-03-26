'use client'

import { useEffect, useRef, useState } from 'react'

export default function FreelanceSection() {
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
        <section className="section" id="freelance">
            <div className="container reveal-section">
                <h2
                    ref={titleRef}
                    className={`section-title reveal-up ${titleVisible ? 'active' : ''}`}
                    style={{ color: '#FFFFFB' }}
                >
                    Pensé pour les experts <br /><span style={{ opacity: 1 }}>qui font le choix de la liberté.</span> {/* Switched opacity from 0.3 to 1 */}
                </h2>

                <div>
                    <p style={{ fontSize: '1.4rem', color: '#FFFFFB', marginBottom: '6rem', maxWidth: '800px', lineHeight: 1.5, opacity: 0.9 }}>
                        Nous supprimons les intermédiaires opaques. Vous trouvez une mission, vous gardez 95 % de votre valeur. Une approche directe, honnête et performante.
                    </p>

                    <div className="d-grid grid-1 md-grid-3 gap-8">
                        <div className="d-flex flex-col gap-4" style={{ padding: '3rem 2.5rem', background: 'rgba(255,255,251,0.02)', border: '1px solid rgba(255,255,251,0.05)', borderRadius: '24px' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.3 }}>Revenus</span>
                            <p style={{ fontSize: '1.2rem', fontWeight: 500, lineHeight: 1.4 }}>5 % de commission seulement. Pas de frais cachés.</p>
                        </div>
                        <div className="d-flex flex-col gap-4" style={{ padding: '3rem 2.5rem', background: 'rgba(255,255,251,0.02)', border: '1px solid rgba(255,255,251,0.05)', borderRadius: '24px' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.3 }}>Qualité</span>
                            <p style={{ fontSize: '1.2rem', fontWeight: 500, lineHeight: 1.4 }}>Missions filtrées et accès direct aux décideurs.</p>
                        </div>
                        <div className="d-flex flex-col gap-4" style={{ padding: '3rem 2.5rem', background: 'rgba(255,255,251,0.02)', border: '1px solid rgba(255,255,251,0.05)', borderRadius: '24px' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.3 }}>Sécurité</span>
                            <p style={{ fontSize: '1.2rem', fontWeight: 500, lineHeight: 1.4 }}>Paiement garanti et cadre contractuel protecteur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
