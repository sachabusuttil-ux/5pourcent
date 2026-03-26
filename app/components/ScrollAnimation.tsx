'use client'

import { useEffect } from 'react'

export default function ScrollAnimation() {
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

        const targets = document.querySelectorAll('.reveal-up, .reveal-section')
        targets.forEach((target) => observer.observe(target))

        return () => observer.disconnect()
    }, [])

    return null
}
