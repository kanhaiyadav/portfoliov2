import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements } from "../../../constants/global";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";
import Title from "./Title";
import SectionHeading from "./SectionHeading";
import { useModal } from "@/Hooks/useModal";

interface AchievementsProps {
    setOpen: (open: boolean) => void;
}

const Achievements = ({ setOpen }: AchievementsProps) => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [mobile, setMobile] = useState(false);
    const { setType, setData } = useModal();

    const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
        const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
    
        const minSwipeDistance = 60; // Minimum horizontal swipe distance
        const maxVerticalThreshold = 40; // Prevents vertical swipes from being detected

    useEffect(() => {
        if (isPaused) {
            return;
        }

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % achievements.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [current, isPaused]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const slideVariants = {
        hidden: { y: "-10%", opacity: 0 },
        visible: {
            y: "0%",
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
        exit: {
            y: "20%",
            opacity: 0,
            transition: { duration: 0.8, ease: "easeIn" },
        },
    };

    const slideVariantsMobile = {
        hidden: { y: "-10%", opacity: 0 },
        visible: {
            x: "0%",
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" },
        },
        exit: {
            x: "-20%",
            opacity: 0,
            transition: { duration: 0.3, ease: "easeIn" },
        },
    };

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
        setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        setTouchEnd({ x: e.touches[0].clientX, y: e.touches[0].clientY }); // Reset touch end
    };

    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
        setTouchEnd({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };

    const onTouchEnd = () => {
        const deltaX = touchStart.x - touchEnd.x;
        const deltaY = Math.abs(touchStart.y - touchEnd.y);

        if (
            Math.abs(deltaX) > minSwipeDistance &&
            deltaY < maxVerticalThreshold
        ) {
            if (deltaX > 0) {
                if (current === 0) setCurrent(achievements.length - 1);
                else setCurrent(() => (current + 1) % achievements.length);
            } else {
                setOpen(true);
            }
        } 
        setTouchStart({x:0, y:0}); // Reset touch start
        setTouchEnd({x:0, y: 0}); // Reset touch end
    };

    return (
        <section
            id="achievements"
            className="w-screen min-h-screen px-[20px] sm:px-[30px] md:px-[80px] lg:px-[50px] xl:px-[100px] flex flex-col gap-2 pb-[20px]"
        >
            <SectionHeading
            >
                {` █████╗   ██████╗ ██╗  ██╗ ██╗ ███████╗ ██╗   ██╗ ███████╗ ███╗   ███╗ ███████╗ ███╗   ██╗ ████████╗ ███████╗ 
██╔══██╗ ██╔════╝ ██║  ██║ ██║ ██╔════╝ ██║   ██║ ██╔════╝ ████╗ ████║ ██╔════╝ ████╗  ██║ ╚══██╔══╝ ██╔════╝
███████║ ██║      ███████║ ██║ █████╗   ██║   ██║ █████╗   ██╔████╔██║ █████╗   ██╔██╗ ██║    ██║    ███████╗
██╔══██║ ██║      ██╔══██║ ██║ ██╔══╝   ╚██╗ ██╔╝ ██╔══╝   ██║╚██╔╝██║ ██╔══╝   ██║╚██╗██║    ██║    ╚════██║
██║  ██║ ╚██████╗ ██║  ██║ ██║ ███████╗  ╚████╔╝  ███████╗ ██║ ╚═╝ ██║ ███████╗ ██║ ╚████║    ██║    ███████║
╚═╝  ╚═╝  ╚═════╝ ╚═╝  ╚═╝ ╚═╝ ╚══════╝   ╚═══╝   ╚══════╝ ╚═╝     ╚═╝ ╚══════╝ ╚═╝  ╚═══╝    ╚═╝    ╚══════╝
`}
            </SectionHeading>
            
            <div
                className="flex flex-col lg:flex-row gap-2 md:gap-4"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <AnimatePresence mode="wait">
                    <motion.main
                        key={current}
                        className="flex flex-col lg:flex-row gap-4 xs:gap-6 md:gap-10 w-full mt-[70px] md:mt-[20px] flex-1"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobile ? slideVariantsMobile : slideVariants}
                    >
                        <div className="grid grid-cols-2 grid-row-2 m-auto lg:m-0 w-fit gap-2 sm:gap-4 md:gap-6 h-fit">
                            {achievements[current].images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`border rounded-xl h-[110px] xs:h-[130px] sm:h-[180px] 
                                        lg:h-[230px] aspect-[16/9] max-w-[350px] w-full bg-cover hover:bg-size-[120%]
                                        `}
                                    style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                    onClick={() => {
                                        console.log("Image clicked:", img);
                                        setType("image");
                                        setData({
                                            images: achievements[current].images,
                                            index: index,
                                        });
                                    }}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col w-full lg:w-[475px] lg:max-h-[470px]">
                            <Title className="w-[95%] font-semibold whitespace-nowrap" title={achievements[current].title} />
                            <div
                                className="flex-1 min-h-0 overflow-y-auto thin-scrollbar text-xs xs:text-xl md:text-2xl mt-2 xs:mt-4 max-h-[180px] xs:max-h-[2000px]"
                                dangerouslySetInnerHTML={{
                                    __html: achievements[
                                        current
                                    ].descriptions.join("<br/><br/>"),
                                }}
                            />
                        </div>
                    </motion.main>
                </AnimatePresence>
                <div className="flex flex-row lg:flex-col gap-2 items-center justify-center w-full lg:w-fit mt-[-40px] xs:mt-[-20px] md:mt-0">
                    <button
                        className={`w-4 h-4 rounded-full }`}
                        onClick={() => setIsPaused(!isPaused)}
                        name="play-pause"
                    >
                        {isPaused ? <FaRegCirclePlay /> : <FaRegCirclePause />}
                    </button>
                    {achievements.map((_, index) => (
                        <button
                            key={index}
                            className={`w-4 h-4 rounded-full ${
                                index === current
                                    ? "bg-primary"
                                    : "bg-primary/20"
                                }`}
                            name="current slide indicator"
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
