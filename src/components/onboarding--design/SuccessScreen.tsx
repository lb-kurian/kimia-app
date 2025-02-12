"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import confetti from "canvas-confetti"

export function SuccessScreen({ onComplete }: { onComplete: () => void }) {
  const [showRedirectMessage, setShowRedirectMessage] = useState(false)

  useEffect(() => {
    // Trigger fireworks animation
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti(
        Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }),
      )
      confetti(
        Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }),
      )
    }, 250)

    // Show redirect message after 4 seconds
    const redirectTimer = setTimeout(() => {
      setShowRedirectMessage(true)
    }, 4000)

    // Redirect to dashboard after 6 seconds
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 6000)

    return () => {
      clearInterval(interval)
      clearTimeout(redirectTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-[#038BAF] mb-4">You are successfully onboarded!</h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
          <p className="text-xl text-[#313D4F]">Welcome to KIMIA!</p>
        </motion.div>
        {showRedirectMessage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <p className="text-lg text-[#979797] mt-4">Redirecting to dashboard...</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

