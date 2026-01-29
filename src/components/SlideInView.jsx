import { motion } from "framer-motion";

const SlideInText = ({
  text = "Simplicity is the ultimate sophistication.",
  delayOffset = 0
}) => {
  return (
    <span className="inline-block font-serif">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: (i * 0.02) + delayOffset,
            ease: "easeOut",
          }}
          className="inline-block font-serif"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const SlideInView = ({ text, delayOffset = 0 }) => {
  return (
    <span className="inline-block">
      <SlideInText text={text} delayOffset={delayOffset} />
    </span>
  );
};

export default SlideInView;
