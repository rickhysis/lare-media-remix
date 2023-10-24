import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ScrollAnimationProps extends HTMLMotionProps<"div"> {
	children: React.ReactNode;
	className?: string;
}

export default function ScrollAnimation({ children, className, ...props }: ScrollAnimationProps) {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}