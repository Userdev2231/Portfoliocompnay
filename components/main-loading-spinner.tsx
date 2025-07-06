"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function MainLoadingSpinner() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background particles (viewport-size-agnostic) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          // random % positions generated once
          const left = `${Math.random() * 100}%`
          const top = `${Math.random() * 100}%`
          const xShift = Math.random() * 60 - 30 // -30% … +30%
          const yShift = Math.random() * 60 - 30
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-foreground/20 rounded-full"
              style={{ left, top }}
              animate={{
                x: [`0%`, `${xShift}%`],
                y: [`0%`, `${yShift}%`],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          )
        })}
      </div>

      <div className="text-center relative z-10">
        {/* Main 3D Spinner Container */}
        <div className="relative mb-8 perspective-1000">
          {/* Outer Glowing Ring */}
          <motion.div
            animate={{
              rotateY: 360,
              rotateX: [0, 15, 0, -15, 0],
            }}
            transition={{
              rotateY: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              rotateX: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="w-32 h-32 border-4 border-transparent border-t-foreground/30 border-r-foreground/50 rounded-full relative"
            style={{
              boxShadow: `0 0 30px hsl(var(--foreground) / 0.3), inset 0 0 30px hsl(var(--foreground) / 0.1)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Inner rotating elements */}
            <motion.div
              animate={{
                rotateZ: -360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotateZ: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
              className="absolute inset-3 border-4 border-transparent border-l-foreground/60 border-b-foreground/40 rounded-full"
              style={{
                boxShadow: `0 0 20px hsl(var(--foreground) / 0.4)`,
              }}
            />

            {/* Center pulsing core */}
            <motion.div
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.6, 1, 0.6],
                rotateZ: 360,
              }}
              transition={{
                scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                opacity: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
                rotateZ: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
              className="absolute inset-0 m-auto w-8 h-8 bg-foreground rounded-full"
              style={{
                boxShadow: `0 0 25px hsl(var(--foreground)), 0 0 50px hsl(var(--foreground)), 0 0 75px hsl(var(--foreground))`,
              }}
            />

            {/* Orbiting particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-foreground rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  left: "50%",
                  top: "50%",
                  transformOrigin: `${20 + i * 8}px 0px`,
                  marginLeft: "-4px",
                  marginTop: "-4px",
                  boxShadow: `0 0 10px hsl(var(--foreground))`,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Company Logo/Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <motion.h1
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="text-4xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            The Ad-Project
          </motion.h1>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-muted-foreground mt-2"
          >
            India's First AI-Powered AdTech Ecosystem
          </motion.p>
        </motion.div>

        {/* Loading Progress */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Loading</span>
            <span className="text-sm font-mono text-foreground">{progress}%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-foreground rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              {/* Glowing effect on progress bar */}
              <motion.div
                className="absolute inset-0 bg-foreground rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 5px hsl(var(--foreground))",
                    "0 0 20px hsl(var(--foreground))",
                    "0 0 5px hsl(var(--foreground))",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </div>
        </div>

        {/* Loading Status Messages */}
        <motion.div
          key={Math.floor(progress / 25)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          {progress < 25 && "Initializing AI Systems..."}
          {progress >= 25 && progress < 50 && "Loading AdTech Platform..."}
          {progress >= 50 && progress < 75 && "Connecting to Analytics..."}
          {progress >= 75 && progress < 100 && "Finalizing Dashboard..."}
          {progress >= 100 && "Welcome to The Future of Advertising!"}
        </motion.div>

        {/* Animated dots */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -8, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-foreground rounded-full"
              style={{
                boxShadow: `0 0 8px hsl(var(--foreground))`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-10 left-10 w-16 h-16 border border-foreground/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-10 right-10 w-12 h-12 border border-foreground/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-1/4 right-20 w-8 h-8 border border-foreground/20 rounded-full"
      />
    </div>
  )
}
