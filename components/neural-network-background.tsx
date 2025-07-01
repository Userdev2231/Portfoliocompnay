"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export default function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const nodesRef = useRef<Node[]>([])

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.6, 0.4])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 1.5 // Make it taller for scrolling
    }

    const createNodes = () => {
      const nodes: Node[] = []
      const nodeCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 20000))

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          connections: [],
        })
      }

      // Create connections
      nodes.forEach((node, i) => {
        const connectionCount = Math.floor(Math.random() * 3) + 1
        for (let j = 0; j < connectionCount; j++) {
          const targetIndex = Math.floor(Math.random() * nodes.length)
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex)
          }
        }
      })

      nodesRef.current = nodes
    }

    const animate = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.03)" // Very subtle clear
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const nodes = nodesRef.current

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
      })

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const target = nodes[connectionIndex]
          if (!target) return

          const distance = Math.sqrt(Math.pow(target.x - node.x, 2) + Math.pow(target.y - node.y, 2))
          const maxDistance = 250

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.4
            const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y)
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`) // Blue-500
            gradient.addColorStop(0.5, `rgba(147, 197, 253, ${opacity * 1.2})`) // Blue-300
            gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`) // Blue-500

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(target.x, target.y)
            ctx.stroke()

            // Add animated pulse effect
            const pulseOffset = (Date.now() * 0.001 + i * 0.1) % 1
            const pulseX = node.x + (target.x - node.x) * pulseOffset
            const pulseY = node.y + (target.y - node.y) * pulseOffset

            ctx.fillStyle = `rgba(96, 165, 250, ${0.6 * (1 - pulseOffset)})`
            ctx.beginPath()
            ctx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2)
            ctx.fill()
          }
        })
      })

      // Draw nodes
      nodes.forEach((node, i) => {
        const time = Date.now() * 0.001
        const pulse = Math.sin(time + i * 0.5) * 0.5 + 0.5
        const size = 2.5 + pulse * 1.5

        // Node glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size * 4)
        gradient.addColorStop(0, `rgba(59, 130, 246, ${0.6 * pulse})`)
        gradient.addColorStop(0.5, `rgba(147, 197, 253, ${0.3 * pulse})`)
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, size * 4, 0, Math.PI * 2)
        ctx.fill()

        // Node core
        ctx.fillStyle = `rgba(219, 234, 254, ${0.8 + pulse * 0.2})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createNodes()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createNodes()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <motion.div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" style={{ y, opacity }}>
      <div className="absolute inset-0 backdrop-blur-[2px]">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 60%, #475569 100%)",
            filter: "blur(0.5px)",
          }}
        />
      </div>

      {/* Additional blur overlay */}
      <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[1px]" />
    </motion.div>
  )
}
