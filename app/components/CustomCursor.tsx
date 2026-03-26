'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isPointer, setIsPointer] = useState(false)
    const [isHidden, setIsHidden] = useState(true)

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
            setIsHidden(false)

            const target = e.target as HTMLElement
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
        }

        const onMouseLeave = () => setIsHidden(true)
        const onMouseEnter = () => setIsHidden(false)

        window.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseleave', onMouseLeave)
        document.addEventListener('mouseenter', onMouseEnter)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseleave', onMouseLeave)
            document.removeEventListener('mouseenter', onMouseEnter)
        }
    }, [])

    return (
        <div
            className={`custom-cursor ${isPointer ? 'pointer' : ''} ${isHidden ? 'hidden' : ''}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    )
}
