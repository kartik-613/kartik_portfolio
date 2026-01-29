import React from 'react';
import { motion } from 'framer-motion';

const LiquetGlassButton = ({
    children,
    href,
    onClick,
    className = "",
    theme = "dark",
    target,
    rel
}) => {
    const Tag = href ? 'a' : 'button';

    const themeClasses = theme === 'dark'
        ? "bg-white/[0.03] hover:bg-white/10 border-white/10 text-white"
        : "bg-black/[0.03] hover:bg-white/10 border-black/10 text-black";

    return (
        <motion.div
            whileHover="hover"
            initial="initial"
            whileTap="tap"
            className={`relative group inline-block ${className}`}
        >
            {/* Liquid outer glow */}
            <motion.div
                variants={{
                    initial: { opacity: 0, scale: 0.8 },
                    hover: { opacity: 0.6, scale: 1.15 }
                }}
                className="absolute -inset-3 rounded-full blur-2xl transition-opacity duration-700 pointer-events-none bg-white/10"
            />

            <Tag
                href={href}
                onClick={onClick}
                target={target}
                rel={rel}
                className={`
          relative flex items-center justify-center gap-3 
          px-8 py-3 rounded-full 
          border backdrop-blur-3xl
          shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
          transition-all duration-500
          overflow-hidden
          ${themeClasses}
        `}
            >
                {/* Liquid Blobs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        animate={{
                            x: [0, 40, 0],
                            y: [0, -20, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-2xl"
                    />
                    <motion.div
                        animate={{
                            x: [0, -30, 0],
                            y: [0, 20, 0],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-2xl"
                    />
                </div>

                {/* Dynamic Glass Shine */}
                <motion.div
                    variants={{
                        initial: { x: '-200%', opacity: 0 },
                        hover: { x: '200%', opacity: 1 }
                    }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-30deg] pointer-events-none"
                />

                {/* Liquid Surface Glare */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

                <span className="relative z-10 flex items-center gap-2 font-serif font-semibold tracking-wide text-[15px]">
                    {children}
                </span>
            </Tag>
        </motion.div>
    );
};

export default LiquetGlassButton;
