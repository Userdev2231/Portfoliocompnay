"use client"

import { motion } from "framer-motion"

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        {/* 3D Glowing Spinner */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-24 h-24 border-4 border-transparent border-t-foreground/20 border-r-foreground/40 rounded-full"
          />

          {/* Middle rotating ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-2 w-20 h-20 border-4 border-transparent border-t-foreground/40 border-l-foreground/60 rounded-full"
          />

          {/* Inner rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-4 w-16 h-16 border-4 border-transparent border-t-foreground/60 border-b-foreground/80 rounded-full"
          />

          {/* Center glowing dot */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 m-auto w-4 h-4 bg-foreground rounded-full shadow-lg"
            style={{
              boxShadow: `0 0 20px hsl(var(--foreground)), 0 0 40px hsl(var(--foreground)), 0 0 60px hsl(var(--foreground))`,
            }}
          />
        </div>

        {/* Loading text */}
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-2xl font-bold text-foreground mb-4"
        >
          Loading Business Model
        </motion.h2>

        {/* Animated dots */}
        <div className="flex items-center justify-center space-x-2">
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
            />
          ))}
        </div>

        {/* Progress indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mt-6 h-1 bg-foreground/20 rounded-full overflow-hidden max-w-xs mx-auto"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="h-full w-1/3 bg-foreground rounded-full"
          />
        </motion.div>
      </div>
    </div>
  )
}
