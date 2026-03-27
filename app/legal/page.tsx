export default function LegalPage() {
  return (
    <main
      style={{
        background: '#FFFFFB',
        color: '#111',
        minHeight: '100vh',
        padding: '8rem 1.5rem 4rem',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: 'var(--font-syne)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Mentions légales</h1>

        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Le site accessible à l&apos;adresse https://5pourcent.consulting (ci-après le &ldquo;Site&rdquo;) est édité
          par :
        </p>

        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          5% Consulting
          <br />
          Projet en cours de structuration
          <br />
          Responsables de la publication :
          <br />
          Sacha BUSUTTIL
          <br />
          Charly BRAUNN
        </p>

        <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
          Contact :
          <br />
          📧 5pourcent.consulting@gmail.com
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Hébergement</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
          Le Site est hébergé par :
          <br />
          OVH SAS
          <br />
          2 rue Kellermann
          <br />
          59100 Roubaix – France
          <br />
          www.ovh.com
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Propriété intellectuelle</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
          L&apos;ensemble du contenu présent sur le Site (textes, visuels, éléments graphiques, logo, etc.) est
          protégé par le droit de la propriété intellectuelle.
          <br />
          <br />
          Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est
          interdite.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Responsabilité</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
          Le Site a pour objectif de présenter un projet en cours de développement et de permettre la mise en relation
          future entre freelances et entreprises.
          <br />
          <br />
          Les informations diffusées sont fournies à titre indicatif et peuvent évoluer.
        </p>
      </div>
    </main>
  )
}
