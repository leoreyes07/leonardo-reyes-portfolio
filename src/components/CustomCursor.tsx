import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  // We set initial positions off-screen
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  // Smooth physics for the spring
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // An even softer spring for the background glow
  const glowSpringConfig = { damping: 30, stiffness: 100, mass: 1.5 };
  const glowX = useSpring(cursorX, glowSpringConfig);
  const glowY = useSpring(cursorY, glowSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset by half the width/height to center the elements
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Small precision cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-6 h-6 -ml-3 -mt-3 rounded-full border border-secondary/80 bg-secondary/20 mix-blend-screen shadow-[0_0_15px_rgba(72,218,218,0.5)] hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
      />
      {/* Large soft glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9000] w-[400px] h-[400px] -ml-[200px] -mt-[200px] rounded-full bg-primary/20 blur-[100px] hidden md:block"
        style={{
          x: glowX,
          y: glowY,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{ opacity: { duration: 0.5 } }}
      />
    </>
  );
}
