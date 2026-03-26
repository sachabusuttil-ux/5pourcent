'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="footer" style={{
            background: '#FFFFFB',
            color: '#111',
            borderTop: 'none',
            padding: '8rem 0 4rem',
            marginTop: '6rem'
        }}>
            <div className="container reveal-section">
                <div className="d-flex flex-col md-flex-row justify-between items-start gap-12" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '6rem', marginBottom: '3rem' }}>
                    <div className="d-flex flex-col gap-6" style={{ flex: '1' }}>
                        <div style={{ position: 'relative', width: '50px', height: 'auto' }}>
                            <Image
                                src="/logo-black.png"
                                alt="5%"
                                width={80}
                                height={80}
                                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                            />
                        </div>
                        <p style={{ fontSize: '1.25rem', color: '#111', fontFamily: 'var(--font-syne)', fontWeight: 400 }}>
                            Le modèle juste.
                        </p>
                    </div>

                    <div className="footer-nav-grid" style={{ flex: '2', fontFamily: 'var(--font-syne)', fontSize: '1rem' }}>
                        <div className="d-flex flex-col gap-6">
                            <span style={{ fontWeight: 800, opacity: 0.2, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>Navigation</span>
                            <Link href="#notre-mission" className="hover-text-dark">Notre mission</Link>
                            <Link href="#notre-methode" className="hover-text-dark">Notre méthode</Link>
                            <Link href="#nos-choix" className="hover-text-dark">Nos choix</Link>
                        </div>
                        <div className="d-flex flex-col gap-6">
                            <span style={{ fontWeight: 800, opacity: 0.2, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>Légal</span>
                            <Link href="/legal" className="hover-text-dark">Mentions légales</Link>
                            <Link href="/cgu" className="hover-text-dark">CGU</Link>
                            <Link href="/privacy" className="hover-text-dark">Confidentialité</Link>
                        </div>
                        <div className="d-flex flex-col gap-6">
                            <span style={{ fontWeight: 800, opacity: 0.2, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>Réseaux</span>
                            <a href="#" className="hover-text-dark">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .footer-nav-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2rem;
                        justify-items: end;
                    }
                    @media (max-width: 768px) {
                        .footer-nav-grid {
                            grid-template-columns: 1fr;
                            gap: 3rem;
                            justify-items: start;
                            width: 100%;
                        }
                    }
                `}</style>

                <div className="d-flex justify-between items-center flex-wrap gap-4" style={{ fontSize: '0.85rem', opacity: 0.4 }}>
                    <p>© {new Date().getFullYear()} 5%. Tous droits réservés.</p>
                    <p>Fait avec expertise.</p>
                </div>
            </div>
        </footer>
    )
}
