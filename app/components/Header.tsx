'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [theme, setTheme] = useState('dark') // 'dark' (default) or 'light'
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setScrolled(currentScrollY > 50)

            // Theme detection based on sections
            const sections = document.querySelectorAll('section[data-theme]')
            let currentTheme = 'dark'

            sections.forEach(section => {
                const rect = section.getBoundingClientRect()
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentTheme = section.getAttribute('data-theme') || 'dark'
                }
            })
            setTheme(currentTheme)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }, [isMenuOpen])

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''} ${theme === 'light' ? 'light-theme' : ''} ${isMenuOpen ? 'menu-open' : ''}`} style={{
            position: 'fixed',
            top: 'var(--header-top, 30px)',
            left: 'var(--header-side, 50px)',
            right: 'var(--header-side, 50px)',
            background: isMenuOpen ? '#111' : (theme === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.1)'),
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: isMenuOpen ? '32px' : '100px',
            border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid rgba(255, 255, 251, 0.05)',
            zIndex: 1000,
            padding: '1rem 0',
            width: 'calc(100% - (var(--header-side, 50px) * 2))',
            height: isMenuOpen ? 'calc(100vh - 60px)' : 'auto',
            maxHeight: isMenuOpen ? '500px' : 'auto',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            overflow: 'hidden'
        }}>
            <div className="container header-inner d-flex items-center justify-between" style={{ height: '60px' }}>
                <Link href="/" className="d-flex items-center" onClick={closeMenu}>
                    <div style={{ position: 'relative', width: '45px', height: 'auto', display: 'flex' }}>
                        <Image
                            src={(theme === 'light' && !isMenuOpen) ? "/logo-black.png" : "/logo-white.png"}
                            alt="5%"
                            width={100}
                            height={100}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="d-flex items-center gap-12 desktop-nav">
                    <nav className="d-flex gap-12 nav-links-container" style={{ fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '1rem', color: theme === 'light' ? '#111' : '#FFFFFB' }}>
                        <Link href="#notre-mission" className="nav-link">Notre mission</Link>
                        <Link href="#notre-methode" className="nav-link">Notre méthode</Link>
                        <Link href="#nos-choix" className="nav-link">Nos choix</Link>
                    </nav>

                    <a href="https://form.typeform.com/to/rYRR2F7c" target="_blank" rel="noopener noreferrer" className="btn-navbar" style={{
                        background: '#FF4000',
                        color: '#FFFFFB',
                        padding: '0.8rem 2rem',
                        fontSize: '0.9rem',
                        borderRadius: '100px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                    }}>
                        Je candidate
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }} className="nav-arrow">
                            <path d="M11 1L17 7M17 7L11 13M17 7H1" stroke="#FFFFFB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                {/* Burger Button */}
                <button
                    className={`burger-btn ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        padding: '10px',
                        background: 'transparent',
                        border: 'none',
                        display: 'none',
                        flexDirection: 'column',
                        gap: '6px',
                        cursor: 'pointer',
                        zIndex: 1001
                    }}
                >
                    <span style={{ width: '25px', height: '2px', background: (theme === 'light' && !isMenuOpen) ? '#111' : '#FFFFFB', transition: 'all 0.3s ease', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
                    <span style={{ width: '25px', height: '2px', background: (theme === 'light' && !isMenuOpen) ? '#111' : '#FFFFFB', transition: 'all 0.3s ease', opacity: isMenuOpen ? 0 : 1 }}></span>
                    <span style={{ width: '25px', height: '2px', background: (theme === 'light' && !isMenuOpen) ? '#111' : '#FFFFFB', transition: 'all 0.3s ease', transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none' }}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} style={{
                padding: '2rem',
                display: isMenuOpen ? 'flex' : 'none',
                flexDirection: 'column',
                gap: '2rem',
                opacity: isMenuOpen ? 1 : 0,
                pointerEvents: isMenuOpen ? 'all' : 'none',
                transition: 'opacity 0.4s ease',
                height: '100%'
            }}>
                <nav className="d-flex flex-col gap-8" style={{ fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '1.5rem', color: '#FFFFFB' }}>
                    <Link href="#notre-mission" onClick={closeMenu}>Notre mission</Link>
                    <Link href="#notre-methode" onClick={closeMenu}>Notre méthode</Link>
                    <Link href="#nos-choix" onClick={closeMenu}>Nos choix</Link>
                </nav>

                <a href="https://form.typeform.com/to/rYRR2F7c" target="_blank" rel="noopener noreferrer" className="btn-navbar" onClick={closeMenu} style={{
                    background: '#FF4000',
                    color: '#FFFFFB',
                    padding: '1.2rem',
                    fontSize: '1.1rem',
                    borderRadius: '100px',
                    fontWeight: 700,
                    textAlign: 'center',
                    textDecoration: 'none'
                }}>
                    Je candidate
                </a>
            </div>

            <style jsx>{`
                .header {
                    --header-top: 30px;
                    --header-side: 50px;
                }
                @media (max-width: 1024px) {
                    .header {
                        --header-top: 15px;
                        --header-side: 15px;
                    }
                }
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .burger-btn {
                        display: flex !important;
                    }
                }
                .mobile-menu {
                    transform: translateY(20px);
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .menu-open .mobile-menu {
                    transform: translateY(0);
                }
            `}</style>
        </header>
    )
}
