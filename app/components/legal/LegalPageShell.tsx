import Link from 'next/link'
import Header from '@/app/components/Header'
import type { ReactNode } from 'react'

type LegalPageShellProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function LegalPageShell({ title, subtitle, children }: LegalPageShellProps) {
  return (
    <>
      <Header />
      <main style={{ background: '#FFFFFB', color: '#111', minHeight: '100vh' }}>
        <section data-theme="light" style={{ padding: '10rem 1.5rem 4rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: 'var(--font-syne)' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(17,17,17,0.15)',
                  marginBottom: '1.5rem',
                }}
              >
                ← Retour au site
              </Link>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', lineHeight: 1.15, marginBottom: '0.75rem' }}>
                {title}
              </h1>
              {subtitle ? (
                <p style={{ opacity: 0.7, fontSize: '1.05rem', lineHeight: 1.6 }}>{subtitle}</p>
              ) : null}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7 }}>
              {children}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
