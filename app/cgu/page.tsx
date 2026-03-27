import LegalPageShell from '@/app/components/legal/LegalPageShell'

export default function CguPage() {
  return (
    <LegalPageShell
      title="CGU / CGV"
      subtitle="Conditions générales d’utilisation et conditions générales de vente (version pré-lancement)."
    >
      <section>
        <h2 style={{ fontSize: '1.65rem', marginBottom: '0.75rem' }}>Conditions générales d&apos;utilisation (CGU)</h2>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. Objet</h3>
        <p>
          Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de définir les modalités d&apos;accès
          et d&apos;utilisation du site 5% Consulting.
        </p>

        <h3 style={{ fontSize: '1.2rem', margin: '1.25rem 0 0.5rem' }}>2. Accès au site</h3>
        <p>Le Site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à Internet.</p>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
          <li>présenter le projet 5% Consulting ;</li>
          <li>collecter des informations auprès de freelances intéressés.</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', margin: '1.25rem 0 0.5rem' }}>3. Nature du service</h3>
        <p>Le site est en phase de lancement.</p>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
          <li>identifier des profils freelances ;</li>
          <li>préparer de futures mises en relation.</li>
        </ul>
        <p style={{ marginTop: '0.75rem' }}>Aucune relation contractuelle ou commerciale n&apos;est engagée à ce stade.</p>

        <h3 style={{ fontSize: '1.2rem', margin: '1.25rem 0 0.5rem' }}>4. Engagement de l&apos;utilisateur</h3>
        <p>
          L&apos;utilisateur s&apos;engage à fournir des informations exactes, à jour et complètes. Il s&apos;engage également à
          ne pas utiliser le Site de manière abusive ou frauduleuse.
        </p>

        <h3 style={{ fontSize: '1.2rem', margin: '1.25rem 0 0.5rem' }}>5. Responsabilité</h3>
        <p>Les responsables du site ne sauraient être tenus responsables :</p>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
          <li>d&apos;un dysfonctionnement du Site ;</li>
          <li>d&apos;une interruption temporaire ;</li>
          <li>de l&apos;utilisation des informations fournies.</li>
        </ul>

        <h3 style={{ fontSize: '1.2rem', margin: '1.25rem 0 0.5rem' }}>6. Modification</h3>
        <p>Les présentes CGU peuvent être modifiées à tout moment afin de refléter l&apos;évolution du projet.</p>

        <h3 style={{ fontSize: '1.2rem', margin: '1.25rem 0 0.5rem' }}>7. Droit applicable</h3>
        <p>Les présentes CGU sont soumises au droit français.</p>
      </section>

      <section>
        <h2 style={{ fontSize: '1.65rem', marginBottom: '0.75rem' }}>
          Conditions générales de vente (CGV) – version pré-lancement
        </h2>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. Objet</h3>
        <p>
          Les présentes Conditions Générales de Vente (CGV) ont vocation à définir les conditions dans lesquelles 5%
          Consulting proposera, à terme, un service de mise en relation entre freelances et entreprises.
        </p>

        <h3 style={{ fontSize: '1.2rem', margin: '1.25rem 0 0.5rem' }}>2. Statut actuel</h3>
        <p>À la date de consultation du Site :</p>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
          <li>aucune prestation n&apos;est commercialisée ;</li>
          <li>aucun paiement n&apos;est demandé ;</li>
          <li>aucun contrat n&apos;est conclu.</li>
        </ul>
        <p style={{ marginTop: '0.75rem' }}>Le projet est en phase de développement.</p>

        <h3 style={{ fontSize: '1.2rem', margin: '1.25rem 0 0.5rem' }}>3. Service envisagé</h3>
        <p>Le service proposé à terme consistera à :</p>
        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
          <li>mettre en relation des freelances et des entreprises ;</li>
          <li>faciliter les collaborations ;</li>
          <li>proposer un cadre structuré.</li>
        </ul>
        <p style={{ marginTop: '0.75rem' }}>Une commission pourra être appliquée sur les missions réalisées.</p>

        <h3 style={{ fontSize: '1.2rem', margin: '1.25rem 0 0.5rem' }}>4. Évolution</h3>
        <p>
          Les conditions précises (tarification, modalités de paiement, obligations contractuelles) seront définies
          ultérieurement dans une version mise à jour des CGV.
        </p>

        <h3 style={{ fontSize: '1.2rem', margin: '1.25rem 0 0.5rem' }}>5. Acceptation</h3>
        <p>
          L&apos;utilisation actuelle du Site ne vaut pas acceptation de conditions commerciales, aucune prestation
          n&apos;étant encore fournie.
        </p>
      </section>
    </LegalPageShell>
  )
}
