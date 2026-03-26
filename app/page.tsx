import Header from './components/Header'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import HowItWorks from './components/HowItWorks'
import FreelanceSection from './components/FreelanceSection'
import WhyUs from './components/WhyUs'
import Trust from './components/Trust'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Manifesto />
      <HowItWorks />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  )
}
