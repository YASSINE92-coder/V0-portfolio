'use client'

import React from "react"
import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

type SpringConfig = {
  damping?: number
  stiffness?: number
  mass?: number
  restDelta?: number
}

type SmoothCursorProps = {
  cursor?: React.ReactNode
  springConfig?: SpringConfig
  className?: string
}

const defaultSpringConfig: Required<SpringConfig> = {
  damping: 45,
  stiffness: 400,
  mass: 1,
  restDelta: 0.001
}

function DefaultCursor() {
  return (
    <div className="relative h-6 w-6 text-blue-500 dark:text-blue-500">
      <div className="absolute inset-0 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur" />
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500" />
    </div>
  )
}

export function SmoothCursor({
  cursor = <DefaultCursor />,
  springConfig = defaultSpringConfig,
  className
}: SmoothCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const velocityRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const { damping, stiffness, mass, restDelta } = { ...defaultSpringConfig, ...springConfig }

    const handleMove = (event: PointerEvent) => {
      targetRef.current.x = event.clientX
      targetRef.current.y = event.clientY
    }

    // Support touch by updating on press as well.
    window.addEventListener("pointermove", handleMove, { passive: true })
    window.addEventListener("pointerdown", handleMove, { passive: true })

    // Start centered to avoid a jump from 0,0.
    targetRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    positionRef.current = { ...targetRef.current }

    const animate = () => {
      const position = positionRef.current
      const target = targetRef.current
      const velocity = velocityRef.current

      const dx = target.x - position.x
      const dy = target.y - position.y

      // Simple critically-damped spring approximation.
      const ax = dx * (stiffness / 1000)
      const ay = dy * (stiffness / 1000)

      velocity.x = (velocity.x + ax) * (1 - damping / 100)
      velocity.y = (velocity.y + ay) * (1 - damping / 100)

      position.x += velocity.x * mass
      position.y += velocity.y * mass

      const angle = Math.atan2(velocity.y, velocity.x) * (180 / Math.PI)

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) rotate(${angle}deg)`
        cursorRef.current.style.opacity = "1"
      }

      // If we're extremely close to the target, snap to avoid endless tiny motions.
      if (Math.hypot(dx, dy) < restDelta) {
        positionRef.current = { ...target }
        velocityRef.current = { x: 0, y: 0 }
      }

      frameRef.current = window.requestAnimationFrame(animate)
    }

    frameRef.current = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("pointermove", handleMove)
      window.removeEventListener("pointerdown", handleMove)
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
    }
  }, [springConfig])

  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-[9999]", className)}
      aria-hidden="true"
    >
      <div
        ref={cursorRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 mix-blend-difference opacity-0 transition-opacity duration-300 will-change-transform"
      >
        {cursor}
      </div>
    </div>
  )
}

