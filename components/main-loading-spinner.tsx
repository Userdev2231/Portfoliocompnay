"use client"

import { motion } from "framer-motion"

export function MainLoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        {/* 3D Spinner */}
        <div className="relative w-32 h-32 mx-auto">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-foreground rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Middle Ring */}
          <motion.div
            className="absolute inset-2 border-4 border-transparent border-r-muted-foreground rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Inner Ring */}
          <motion.div
            className="absolute inset-4 border-4 border-transparent border-b-foreground/60 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Center Dot */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-4 h-4 bg-foreground rounded-full shadow-lg" />
          </motion.div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-bold text-foreground"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            The Ad-Project
          </motion.h2>

          <motion.p
            className="text-muted-foreground"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          >
            Loading amazing content...
          </motion.p>
        </div>

        {/* Progress Dots */}
        <div className="flex space-x-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-muted-foreground rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
