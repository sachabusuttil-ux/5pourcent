'use client'

import { useEffect, useRef, useState } from 'react'

export default function Manifesto() {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                } else {
                    setIsVisible(false)
                }
            },
            {
                threshold: 0.5
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            id="notre-mission"
            data-theme="dark"
            className="section manifesto-section"
            style={{
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                padding: '10rem 0'
            }}
        >
            <div className="container reveal-section d-flex items-center justify-between gap-12 flex-wrap md-flex-nowrap manifesto-container">
                <div style={{ flex: 1 }}>
                    <span style={{
                        color: '#FF4000',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        marginBottom: '2rem',
                        display: 'block',
                        fontFamily: 'var(--font-syne)',
                        textTransform: 'uppercase'
                    }}>/ NOTRE MISSION</span>
                    <p
                        className="manifesto-text"
                        style={{
                            fontSize: '3.5rem',
                            fontFamily: 'var(--font-syne)',
                            fontWeight: 400,
                            lineHeight: 1.2,
                            textAlign: 'left',
                            maxWidth: '950px',
                            transition: 'color 1s ease',
                            color: isVisible ? '#FFFFFB' : '#4A4A4A'
                        }}
                    >
                        Nous mettons en relation les entreprises avec des experts freelances qualifiés, dans les domaines créatifs et techniques. Une approche centrée sur l'expertise et l'efficacité.
                    </p>
                </div>

                <div style={{
                    background: 'rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '30px',
                    padding: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 251, 0.05)',
                    width: '300px',
                    height: '300px'
                }} className="manifesto-logo-box">
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img
                            src="/logo-mission.png"
                            alt="Mission Logo"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .manifesto-section {
                        padding: 4rem 0 !important;
                    }
                    .manifesto-container {
                        gap: 3rem !important;
                    }
                    .manifesto-text {
                        font-size: 2rem !important;
                    }
                    .manifesto-logo-box {
                        width: 150px !important;
                        height: 150px !important;
                        padding: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    )
}
