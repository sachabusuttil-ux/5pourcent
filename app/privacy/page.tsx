import LegalPageShell from '@/app/components/legal/LegalPageShell'

export default function PrivacyPage() {
  return (
    <LegalPageShell
      title="Politique de confidentialité (RGPD)"
      subtitle="Traitement des données collectées via le site et droits des utilisateurs."
    >
      <section>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>1. Données collectées</h2>
        <p>Dans le cadre du formulaire présent sur le Site, les données suivantes peuvent être collectées :</p>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
          <li>prénom ;</li>
          <li>expertise ;</li>
          <li>TJM ;</li>
          <li>disponibilité ;</li>
          <li>stack / métier ;</li>
          <li>lien LinkedIn ;</li>
          <li>portfolio.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>2. Finalité</h2>
        <p>Ces données sont collectées afin de :</p>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
          <li>constituer une base de freelances intéressés ;</li>
          <li>préparer de futures mises en relation ;</li>
          <li>entrer en contact avec les utilisateurs.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>3. Outil utilisé</h2>
        <p>Les données sont collectées via la plateforme Typeform.</p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>4. Conservation</h2>
        <p>
          Les données sont conservées pendant une durée maximale de 24 mois à compter de leur collecte, sauf demande
          de suppression.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>5. Accès aux données</h2>
        <p>
          Les données sont accessibles uniquement par :
          <br />
          Sacha BUSUTTIL
          <br />
          Charly BRAUNN
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>6. Droits des utilisateurs</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
          <li>droit d&apos;accès ;</li>
          <li>droit de rectification ;</li>
          <li>droit de suppression ;</li>
          <li>droit d&apos;opposition.</li>
        </ul>
        <p style={{ marginTop: '0.75rem' }}>
          Pour exercer ces droits :
          <br />
          📧 5pourcent.consulting@gmail.com
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>7. Sécurité</h2>
        <p>Des mesures raisonnables sont mises en place pour protéger les données personnelles.</p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>8. Cookies</h2>
        <p>Le Site peut utiliser des cookies à des fins de fonctionnement et d&apos;analyse.</p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>9. Droit applicable</h2>
        <p>La présente politique est régie par le droit français.</p>
      </section>
    </LegalPageShell>
  )
}
