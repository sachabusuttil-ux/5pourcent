import LegalPageShell from '@/app/components/legal/LegalPageShell'

export default function LegalPage() {
  return (
    <LegalPageShell
      title="Mentions légales"
      subtitle="Informations légales relatives à l’éditeur, l’hébergement et l’utilisation du site 5% Consulting."
    >
      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Éditeur du site</h2>
        <p>Le site accessible à l&apos;adresse https://5pourcent.consulting (ci-après le &ldquo;Site&rdquo;) est édité par :</p>
        <p style={{ marginTop: '0.75rem' }}>
          5% Consulting
          <br />
          Projet en cours de structuration
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Responsables de la publication :
          <br />
          Sacha BUSUTTIL
          <br />
          Charly BRAUNN
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Contact :
          <br />
          📧 5pourcent.consulting@gmail.com
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Hébergement</h2>
        <p>
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
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu présent sur le Site (textes, visuels, éléments graphiques, logo, etc.) est protégé
          par le droit de la propriété intellectuelle.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est
          interdite.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Responsabilité</h2>
        <p>
          Le Site a pour objectif de présenter un projet en cours de développement et de permettre la mise en relation
          future entre freelances et entreprises.
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          Les informations diffusées sont fournies à titre indicatif et peuvent évoluer.
        </p>
      </section>
    </LegalPageShell>
  )
}
