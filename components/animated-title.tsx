"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedTitle() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "AD-PROJECT"

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative"
    >
      <h1
        className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent relative drop-shadow-lg"
        style={{ textShadow: "0 0 20px rgba(59,130,246,0.5)" }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          className="text-blue-400 filter drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
        >
          |
        </motion.span>
      </h1>

      {/* Enhanced glowing effect */}
      <div
        className="absolute inset-0 text-6xl md:text-8xl font-bold text-blue-400/30 blur-md"
        style={{ textShadow: "0 0 30px rgba(59,130,246,0.6)" }}
      >
        {displayText}
      </div>
    </motion.div>
  )
}
