export default function CompanySection() {
    return (
        <section className="section" id="entreprise" style={{ background: '#FFFFFB', color: '#111' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '4rem', marginBottom: '2.5rem', color: '#111', fontFamily: 'var(--font-syne)', fontWeight: 400, lineHeight: 1.1 }}>
                    Recrutez l'élite,<br />sans complexité.
                </h2>

                <p style={{ fontSize: '1.4rem', color: '#111', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem', lineHeight: 1.5, opacity: 0.8 }}>
                    Accédez à un vivier de talents tech et créatifs sélectionnés pour leur excellence. Pas de frais de dossier, que de l'expertise pure.
                </p>

                <div className="d-flex justify-center gap-12 flex-wrap" style={{ marginBottom: '5rem' }}>
                    <div className="d-flex flex-col items-center gap-4" style={{ maxWidth: '250px' }}>
                        <div style={{ width: '48px', height: '48px', background: '#111', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '20px', height: '2px', background: '#FFFFFB' }}></div>
                        </div>
                        <h4 style={{ fontWeight: 800, fontSize: '1.2rem' }}>Rapidité</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Shortlist de profils sous 48 heures.</p>
                    </div>
                    <div className="d-flex flex-col items-center gap-4" style={{ maxWidth: '250px' }}>
                        <div style={{ width: '48px', height: '48px', background: '#111', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '20px', height: '20px', border: '2px solid #FFFFFB', borderRadius: '50%' }}></div>
                        </div>
                        <h4 style={{ fontWeight: 800, fontSize: '1.2rem' }}>Simplicité</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Gestion administrative centralisée.</p>
                    </div>
                    <div className="d-flex flex-col items-center gap-4" style={{ maxWidth: '250px' }}>
                        <div style={{ width: '48px', height: '48px', background: '#111', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '16px', height: '16px', background: '#FFFFFB', transform: 'rotate(45deg)' }}></div>
                        </div>
                        <h4 style={{ fontWeight: 800, fontSize: '1.2rem' }}>Transparence</h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Modèle à 5% fixe. Aucun coût caché.</p>
                    </div>
                </div>

                <a href="/signup" className="btn btn-primary" style={{ background: '#111', color: '#FFFFFB', border: 'none', padding: '1.75rem 5.5rem', fontSize: '1.1rem' }}>
                    Poster une mission
                </a>
            </div>
        </section>
    )
}
