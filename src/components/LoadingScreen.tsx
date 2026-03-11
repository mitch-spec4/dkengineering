import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.2, duration: 0.6 }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        {/* Logo animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-heading text-7xl md:text-9xl">
            <motion.span
              className="text-primary red-glow inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              DK
            </motion.span>
          </span>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="font-heading text-xl md:text-2xl text-foreground tracking-[0.4em] block mt-2"
        >
          ENGINEERING
        </motion.span>

        {/* Loading bar */}
        <motion.div className="mt-10 w-48 h-px bg-border mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-muted-foreground text-[10px] uppercase tracking-[0.5em] block mt-4"
        >
          Since 1986
        </motion.span>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
