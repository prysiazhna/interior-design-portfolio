import React, { useEffect, useRef, useState, useCallback } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

interface MagneticButtonProps {
    children: React.ReactNode;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 400, damping: 100 });
    const springY = useSpring(y, { stiffness: 400, damping: 100 });
    const ref = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (ref.current instanceof HTMLDivElement) {
                const rect = ref.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;
                const maxDistance = 1.5;

                if (isHovered) {
                    x.set(distanceX * maxDistance);
                    y.set(distanceY * maxDistance);
                } else {
                    x.set(0);
                    y.set(0);
                }
            }
        },
        [isHovered, x, y]
    );

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [handleMouseMove]);

    return (
        <motion.div
            ref={ref}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;