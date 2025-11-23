import { motion } from "framer-motion"

export const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
  reverse = false,
}) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]"
      style={{
        "--border-width": borderWidth,
      }}
    >
      <motion.div
        className={`absolute aspect-square bg-gradient-to-l from-transparent via-white to-transparent opacity-75 ${className}`}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round calc(${size}px))`,
          background: `linear-gradient(90deg, transparent, ${colorFrom}, ${colorTo}, transparent)`,
        }}
        animate={{
          offsetDistance: reverse ? ["100%", "0%"] : ["0%", "100%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay: -delay,
        }}
      />
    </div>
  )
}