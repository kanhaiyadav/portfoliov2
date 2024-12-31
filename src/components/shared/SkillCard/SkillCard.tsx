import "./SkillCard.styles.css";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const   SkillCard = ({
    imgPath,
    name,
    progress,
    imgStyle,
    documentation,
    ...otherProps
}: {
    imgPath?: string;
    name?: string;
    progress: number;
    imgStyle?: React.CSSProperties;
    documentation?: string;
}) => {
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

    const Progress_bar = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-grow");
                } else {
                    entry.target.classList.remove("animate-grow");
                }
            },
            {
                threshold: 1,
            }
        );
        const current = Progress_bar.current;
        if (Progress_bar.current) {
            observer.observe(Progress_bar.current);
        }
        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [Progress_bar]);
    return (
        <a
            href={documentation}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-background/90 hover:ring-primary ring-1 ring-transparent border h-fit skill-card flex flex-col items-center gap-1 p-3 rounded-sm shadow-md w-[100px] sm:w-[150px] md:w-[180px]"
            {...otherProps}
        >
            <div
                className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] md:h-[80px] md:w-[80px]"
                style={imgStyle}
            >
                <img
                    src={imgPath}
                    alt={name}
                    className="h-full w-full rounded-xl"
                />
            </div>
            <div className="flex-1 flex flex-col justify-between w-full text-center">
                <h2 className="text-lg sm:text-xl md:text-xl font-normal sm:font-medium mt-[-12px] mb-[2px] sm:mb-0 sm:mt-0">
                    {name}
                </h2>
                <div
                    ref={Progress_bar}
                    className={`skill-progress w-full h-2 md:h-2 md:mt-2 rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] bg-white relative`}
                    style={{
                        "--progress-width": `${progress}%`,
                        "--progress-color": progressColor,
                    }}
                ></div>
            </div>
        </a>
    );
};

export default SkillCard;
