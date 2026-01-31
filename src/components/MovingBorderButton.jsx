import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

const MovingBorder = ({ children, duration = 3000, rx, ry }) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

const MovingBorderButton = ({
  children,
  onClick,
  href,
  className = "",
  theme = "dark",
  ...props
}) => {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`relative overflow-hidden bg-transparent p-[1px] text-sm font-medium rounded-full ${className} ${className.includes('w-full') ? 'block w-full' : 'inline-block'}`}
      style={{ borderRadius: "1.75rem" }}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: "calc(1.75rem * 0.96)" }}
      >
        <MovingBorder duration={3000} rx="30%" ry="30%">
          <div className={`h-20 w-20 opacity-80 ${theme === 'dark'
            ? 'bg-[radial-gradient(#ffffff_40%,transparent_60%)]'
            : 'bg-[radial-gradient(#1e3a8a_40%,transparent_60%)]'
            }`} />
        </MovingBorder>
      </div>

      <div
        className={`relative flex h-full w-full items-center justify-center px-8 py-3 antialiased backdrop-blur-xl transition-all ${theme === 'dark'
          ? 'bg-gray-900/80 text-white border border-gray-700'
          : 'bg-white/80 text-gray-900 border border-gray-300'
          }`}
        style={{ borderRadius: "calc(1.75rem * 0.96)" }}
      >
        {children}
      </div>
    </Component>
  );
};

export default MovingBorderButton;