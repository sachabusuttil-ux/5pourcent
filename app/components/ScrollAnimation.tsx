'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollAnimation() {
    const pathname = usePathname()

    useEffect(() => {
        const observerOptions = {
            threshold: 0.12,
            rootMargin: '0px 0px -60px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    observer.unobserve(entry.target) // fire once only
                }
            })
        }, observerOptions)

        // Re-bind observers on route changes to avoid hidden sections
        // when navigating away and back to the homepage.
        const bindTargets = () => {
            const targets = document.querySelectorAll('.reveal-up, .reveal-section')
            targets.forEach((target) => observer.observe(target))
        }

        const rafId = window.requestAnimationFrame(bindTargets)

        return () => {
            window.cancelAnimationFrame(rafId)
            observer.disconnect()
        }
    }, [pathname])

    return null
}
