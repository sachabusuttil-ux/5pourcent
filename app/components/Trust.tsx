export default function Trust() {
    const features = [
        {
            title: "Paiement sécurisé",
            desc: "Fonds bloqués et libérés à la validation de la mission.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            )
        },
        {
            title: "Contrats clairs",
            desc: "Cadre juridique certifié pour protéger les deux parties.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            )
        },
        {
            title: "Données protégées",
            desc: "Hébergement sécurisé et conformité RGPD stricte.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            )
        },
        {
            title: "Support dédié",
            desc: "Une équipe à votre écoute pour toute question.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            )
        }
    ]

    return (
        <section className="section" id="trust">
            <div className="container reveal-section">
                <div className="d-flex flex-row gap-6 flex-wrap md-flex-nowrap">
                    {features.map((f, i) => (
                        <div key={i} style={{
                            flex: '1',
                            minWidth: '220px',
                            padding: '3rem 2rem',
                            border: '1px solid rgba(255,255,251,0.03)',
                            borderRadius: '24px',
                            background: 'rgba(255,255,251,0.01)'
                        }}>
                            <div style={{ color: 'var(--foreground)', opacity: 0.8, marginBottom: '2rem' }}>
                                {f.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>{f.title}</h3>
                            <p style={{ color: 'var(--gray-medium)', fontSize: '0.95rem', lineHeight: 1.5 }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
