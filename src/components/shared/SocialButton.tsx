import React, { useState } from "react";
import { motion } from "framer-motion";

const SocialButton = ({ children, text }: { children: React.ReactNode, text: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex items-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {isHovered && (
                <motion.span
                    initial={{ opacity: 0, x: -50 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: { type: "tween"},
                    }}
                    className="ml-[-3px] bg-white/80 px-2 py-1 rounded-r-md whitespace-nowrap outline outline-[3px] outline-primary text-primary"
                >
                    {text}
                </motion.span>
            )}
        </div>
    );
};

export default SocialButton;
