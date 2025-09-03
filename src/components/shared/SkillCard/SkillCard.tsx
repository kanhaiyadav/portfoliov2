/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface SkillCardProps {
    imgPath?: string;
    name?: string;
    progress?: number;
    imgStyle?: React.CSSProperties;
    documentation?: string;
    [key: string]: any;
}

const SkillCard: React.FC<SkillCardProps> = ({
    imgPath = "https://via.placeholder.com/50",
    name = "React",
    progress = 75,
    imgStyle,
    documentation = "#",
    ...otherProps
}) => {
    const buttonRef = useRef<HTMLAnchorElement>(null);

    let progressColor;
    if (progress < 25) {
        progressColor = "#ff0000";
    } else if (progress < 50) {
        progressColor = "#ff9900";
    } else if (progress < 75) {
        progressColor = "#f7df2e";
    } else if (progress < 90) {
        progressColor = "#00ff00";
    } else {
        progressColor = "#00b7ff";
    }


    useEffect(() => {
        const btn = buttonRef.current;
        if (!btn) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            btn.style.setProperty("--x", `${x}px`);
            btn.style.setProperty("--y", `${y}px`);
        };

        btn.addEventListener('mousemove', handleMouseMove);

        // Cleanup function
        return () => {
            btn.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <a
            ref={buttonRef}
            href={documentation}
            target="_blank"
            rel="noreferrer"
            className={`shrink-0 dark:bg-black/5 bg-background hover:ring-primary border-border relative
                border-[1px] shadow-[0_0_15px_5px_rgba(255,255,255,0.02)]
                h-fit skill-card flex flex-col sm:flex-row items-center gap-4 p-3 pt-4 min-w-[80px] xs:min-w-[90px]  sm:w-[150px] md:w-[180px] hover-button`}
            style={{
                "--x": "50%",
                "--y": "50%"
            } as React.CSSProperties}
            {...otherProps}
        >
            <span className="w-full">
                <div className="flex w-full items-center gap-3">
                    <div
                        className="h-[50px] w-[50px] "
                        style={imgStyle}
                    >
                        <img
                            src={imgPath}
                            alt=""
                            className="h-full w-full rounded-lg"
                        />
                    </div>
                    <div className="flex-1 flex flex-col justify-between w-full text-center">
                        <span className="text-sm xs:text-lg md:text-xl font-normal md:font-medium mt-[-12px] mb-[2px] sm:mb-0 sm:mt-0 whitespace-nowrap">
                            {name}
                        </span>
                        <div className="w-full h-2 md:h-2 md:mt-2 rounded-full bg-white relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full rounded-full shadow-md border border-gray-500"
                                initial={{ width: "0%" }}
                                whileInView={{ width: `${progress}%` }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                style={{ backgroundColor: progressColor }}
                            />

                        </div>
                    </div>
                </div>
            </span>
        </a>
    );
};

export default SkillCard;