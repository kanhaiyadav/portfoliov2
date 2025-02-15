import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements } from "../../../constants/global";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";

const Achievements = ({setOpen}) => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [mobile, setMobile] = useState(false);

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

    const pathVariants = {
        hidden: {
            strokeDasharray: 1200, // Total length of the motion.path
            strokeDashoffset: 1200, // Initially hidden
        },
        visible: {
            strokeDashoffset: 0, // Fully drawn
            transition: {
                duration: 3, // Animation duration
                ease: "easeInOut",
            },
        },
    };

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


    const onTouchStart = (e) => {
        setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        setTouchEnd({ x: e.touches[0].clientX, y: e.touches[0].clientY }); // Reset touch end
    };

    const onTouchMove = (e) => {
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
            className="w-screen min-h-screen px-[15px] md:px-[20px] lg:px-[50px] xl:px-[100px] flex flex-col gap-2"
        >
            <motion.div
                className="flex gap-8 items-center md:justify-start justify-end"
                initial={{ x: -100, opacity: 0 }} // Start off-screen to the left and invisible
                whileInView={{ x: 0, opacity: 1 }} // Animate to its original position and fully visible
                viewport={{ once: true }} // Trigger animation only once when it comes into view
                transition={{ type: "tween", duration: 0.5, delay: 0.3 }} // Smooth tween transition over 0.8 seconds
            >
                <hr className="w-[150px] border-2 border-primary md:block hidden" />
                <motion.svg
                    className="w-[300px] md:w-[650px] my-4 md:my-6 xl:my-8"
                    width="1090"
                    viewBox="0 0 1090 115"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.path
                        d="M1012.65 98.4316V99.7089L1013.68 100.457C1019.06 104.347 1024.73 107.246 1030.69 109.135C1036.62 111.018 1042.8 111.956 1049.19 111.956C1056.63 111.956 1063.2 110.734 1068.86 108.204C1074.53 105.689 1079.03 102.161 1082.23 97.5772L1082.24 97.5666C1085.46 92.9176 1087.05 87.6077 1087.05 81.7217C1087.05 73.4575 1084.02 66.4402 1078.02 60.8336C1072.14 55.2578 1063.65 51.2044 1052.78 48.5112C1047.19 47.1019 1042.82 45.627 1039.6 44.1091C1036.48 42.5645 1034.43 40.8911 1033.22 39.1836C1032.06 37.4733 1031.45 35.438 1031.45 32.9785C1031.45 30.087 1032.16 27.7015 1033.51 25.7162C1034.89 23.6833 1036.83 22.0727 1039.41 20.9031L1039.42 20.8965L1039.44 20.8896C1042.01 19.6852 1045.05 19.0459 1048.64 19.0459C1053.03 19.0459 1056.56 19.5808 1059.31 20.5635C1061.82 21.4635 1063.9 22.5349 1065.6 23.754L1067.73 37.1837L1068.07 39.292H1070.2H1080.81H1083.31V36.792V16.6152V15.4752L1082.45 14.7277C1078.67 11.4496 1073.93 8.72888 1068.28 6.52495C1062.52 4.21422 1055.96 3.09082 1048.64 3.09082C1041.68 3.09082 1035.47 4.3477 1030.08 6.94378C1024.73 9.5187 1020.47 13.0773 1017.38 17.6394L1017.37 17.6473L1017.37 17.6552C1014.31 22.2488 1012.79 27.4515 1012.79 33.1865C1012.79 38.608 1014.12 43.5161 1016.85 47.8331L1016.86 47.8478L1016.87 47.8624C1019.62 52.0914 1023.57 55.6285 1028.61 58.514L1028.62 58.5212L1028.63 58.5281C1033.69 61.3504 1039.79 63.5714 1046.89 65.2276L1046.9 65.2302C1052.67 66.5461 1057.05 68.0568 1060.15 69.7129L1060.17 69.7224L1060.18 69.7317C1063.35 71.3579 1065.39 73.1491 1066.56 75.0074C1067.76 76.9228 1068.4 79.1787 1068.4 81.8604C1068.4 84.7367 1067.66 87.145 1066.27 89.1836C1064.86 91.2341 1062.79 92.9237 1059.91 94.2007C1057.12 95.4116 1053.58 96.0703 1049.19 96.0703C1045.33 96.0703 1041.78 95.5882 1038.52 94.6435C1035.6 93.7987 1032.88 92.6523 1030.35 91.2066L1028.23 76.5116L1027.92 74.3682H1025.76H1015.15H1012.65V76.8682V98.4316Z"
                        className={`stroke-gray-500 stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M935.966 108V110.5H938.466H974.729H977.229V108V99.2637V97.1565L975.152 96.7998L965.927 95.2151V19.8779H984.152L985.915 31.751L986.232 33.8838H988.388H998.511H1001.01V31.3838V7.04688V4.54688H998.511H914.615H912.115V7.04688V31.3838V33.8838H914.615H924.876H927.043L927.351 31.7391L929.054 19.8779H947.268V95.2151L938.043 96.7998L935.966 97.1565V99.2637V108Z"
                        className={`stroke-gray-500 stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M797.99 108V110.5H800.49H836.753H839.253V108V99.2637V97.1243L837.14 96.7937L826.842 95.1829V36.757L873.478 109.351L874.216 110.5H875.581H888.062H890.562V108V19.9011L899.787 18.3165L901.864 17.9597V15.8525V7.04688V4.54688H899.364H888.062H863.101H860.601V7.04688V15.8525V17.9919L862.714 18.3225L873.012 19.9333V77.7354L827.706 5.71568L826.971 4.54688H825.59H811.792H800.49H797.99V7.04688V15.8525V17.9597L800.067 18.3165L809.292 19.9011V95.2151L800.067 96.7998L797.99 97.1565V99.2637V108Z"
                        className={`stroke-gray-500 stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M704.459 108V110.5H706.959H783.853H786.353V108V83.8018V81.3018H783.853H772.967H770.726L770.482 83.5297L769.2 95.2383H734.42V63.6982H769.153H771.653V61.1982V50.4512V47.9512H769.153H734.42V20.0859H766.985L768.263 31.5905L768.511 33.8145H770.748H781.703H784.203V31.3145V7.04688V4.54688H781.703H706.959H704.459V7.04688V15.8525V17.9597L706.536 18.3165L715.761 19.9011V95.2151L706.536 96.7998L704.459 97.1565V99.2637V108Z"
                        className={`stroke-gray-500 stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M565.097 108V110.5H567.597H603.859H606.359V108V99.2637V97.13L604.252 96.7947L594.156 95.1886V68.0625V68.0481L594.156 68.0338L593.804 37.3829L623.127 105.384L623.778 106.895H625.423H634.506H636.173L636.814 105.355L665.148 37.3044V68.0625V95.1963L655.321 96.7962L653.223 97.1377V99.2637V108V110.5H655.723H691.985H694.485V108V99.2637V97.1565L692.409 96.7998L683.184 95.2151V19.9011L692.409 18.3165L694.485 17.9597V15.8525V7.04688V4.54688H691.985H661.547H659.871L659.234 6.09679L629.826 77.674L599.435 6.07013L598.789 4.54688H597.134H578.898H567.597H565.097V7.04688V15.8525V17.9597L567.173 18.3165L576.398 19.9011V95.2151L567.173 96.7998L565.097 97.1565V99.2637V108Z"
                        className={`stroke-gray-500 stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M470.803 108V110.5H473.303H550.196H552.696V108V83.8018V81.3018H550.196H539.31H537.069L536.825 83.5297L535.544 95.2383H500.763V63.6982H535.497H537.997V61.1982V50.4512V47.9512H535.497H500.763V20.0859H533.329L534.607 31.5905L534.854 33.8145H537.092H548.047H550.547V31.3145V7.04688V4.54688H548.047H473.303H470.803V7.04688V15.8525V17.9597L472.879 18.3165L482.104 19.9011V95.2151L472.879 96.7998L470.803 97.1565V99.2637V108Z"
                        className={`stroke-gray-500 stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M404.33 108.871L404.936 110.5H406.673H418.391H420.129L420.735 108.871L454.049 19.236L460.678 18.3295L462.839 18.0339V15.8525V7.04688V4.54688H460.339H428.514H426.014V7.04688V15.8525V18.0374L428.179 18.33L435.363 19.3008L412.992 80.6573L412.972 80.7116L412.955 80.7668L412.699 81.5842L412.468 80.8049L412.45 80.7437L412.429 80.6835L390.822 19.3098L397.079 18.3219L399.189 17.9888V15.8525V7.04688V4.54688H396.689H364.795H362.295V7.04688V15.8525V18.0314L364.453 18.3291L371.015 19.2342L404.33 108.871Z"
                        className={`stroke-gray-500 stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M312.999 108V110.5H315.499H351.762H354.262V108V99.2637V97.1565L352.185 96.7998L342.96 95.2151V19.9011L352.185 18.3165L354.262 17.9597V15.8525V7.04688V4.54688H351.762H315.499H312.999V7.04688V15.8525V17.9597L315.076 18.3165L324.301 19.9011V95.2151L315.076 96.7998L312.999 97.1565V99.2637V108Z"
                        className={`stroke-gray-500 stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M200.747 108V110.5H203.247H239.51H242.01V108V99.2637V97.1565L239.933 96.7998L230.708 95.2151V65.917H273.966V95.2151L264.741 96.7998L262.664 97.1565V99.2637V108V110.5H265.164H301.427H303.927V108V99.2637V97.1565L301.85 96.7998L292.625 95.2151V19.9011L301.85 18.3165L303.927 17.9597V15.8525V7.04688V4.54688H301.427H290.125H276.466H265.164H262.664V7.04688V15.8525V17.9597L264.741 18.3165L273.966 19.9011V50.1699H230.708V19.9011L239.933 18.3165L242.01 17.9597V15.8525V7.04688V4.54688H239.51H203.247H200.747V7.04688V15.8525V17.9597L202.824 18.3165L212.049 19.9011V95.2151L202.824 96.7998L200.747 97.1565V99.2637V108Z"
                        className={`stroke-gray-500 stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M129.837 104.889L129.843 104.893C137.135 109.655 146.099 111.956 156.587 111.956C162.375 111.956 168.007 111.286 173.477 109.942L173.487 109.94L173.497 109.937C178.963 108.547 183.741 106.609 187.791 104.091L188.971 103.357V101.968V80.0576V77.5576H186.471H175.793H173.549L173.308 79.7883L171.92 92.5892C170.318 93.4232 168.342 94.1552 165.957 94.7604C163.063 95.4945 160.103 95.8623 157.072 95.8623C150.526 95.8623 145.129 94.3829 140.755 91.5519C136.418 88.7149 133.045 84.5798 130.672 79.0185C128.336 73.3917 127.123 66.5049 127.123 58.2861V56.6914C127.123 49.1275 128.265 42.5625 130.484 36.9484C132.692 31.3643 135.891 27.0973 140.043 24.0356L140.05 24.0307L140.056 24.0259C144.135 20.9773 149.18 19.3926 155.339 19.3926C157.941 19.3926 160.31 19.5912 162.454 19.9771L162.462 19.9786C164.669 20.368 166.616 20.9231 168.318 21.6287L168.328 21.6327L168.338 21.6367C169.715 22.1941 170.939 22.8447 172.019 23.5823L173.373 38.406L173.58 40.6787H175.862H186.748H189.248V38.1787V16.4072V15.2797L188.403 14.5333C184.573 11.1506 179.81 8.41994 174.177 6.3016C168.454 4.1493 162.188 3.09082 155.408 3.09082C145.749 3.09082 137.298 5.41497 130.17 10.1669C123.106 14.8764 117.704 21.3228 113.964 29.4331C110.229 37.4865 108.395 46.637 108.395 56.8301V58.2861C108.395 68.3745 110.132 77.4833 113.665 85.5658L113.671 85.5773C117.276 93.7145 122.668 100.175 129.837 104.889Z"
                        className={`stroke-gray-500 stroke-[4]`}
                        variants={pathVariants}
                    />
                    <motion.path
                        d="M3.35352 108V110.5H5.85352H34.7666H37.2666V108V99.2637V97.1585L35.1921 96.8001L30.5259 95.9942L35.7455 81.8643H72.6667L77.7264 95.9891L73.0305 96.8001L70.9561 97.1585V99.2637V108V110.5H73.4561H102.438H104.938V108V99.2637V97.0897L102.786 96.7879L96.8308 95.9531L62.6883 6.15836L62.0756 4.54688H60.3516H48.6338H46.9207L46.3023 6.14444L11.5412 95.9497L5.50959 96.7874L3.35352 97.0869V99.2637V108ZM54.3766 31.3202L66.7046 65.4238H41.8181L54.3766 31.3202Z"
                        className={`stroke-gray-500 stroke-[4]`}
                        variants={pathVariants}
                    />
                </motion.svg>
            </motion.div>
            <div
                className="flex flex-col md:flex-row gap-2 md:gap-4"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <AnimatePresence mode="wait">
                    <motion.main
                        key={current}
                        className="flex flex-col lg:flex-row gap-10 w-full mt-[70px] md:mt-[20px] flex-1"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobile ? slideVariantsMobile : slideVariants}
                    >
                        <div className="grid grid-cols-2 grid-row-2 w-full gap-2 md:gap-6 h-[90%] flex-1">
                            {achievements[current].images.map((img, index) => (
                                <img
                                    src={img}
                                    key={index}
                                    alt=""
                                    className="border rounded-xl h-[130px] md:h-[270px] max-w-[600px] w-full object-cover"
                                />
                            ))}
                        </div>
                        <div className="w-[450px]">
                            <h1 className="w-[95%] text-2xl md:text-3xl xl:text-4xl font-bold text-primary">
                                {achievements[current].title}
                            </h1>
                            <div
                                className="text-sm md:text-md mt-4 w-[75%] xs:w-[80%] md:w-[90%]"
                                dangerouslySetInnerHTML={{
                                    __html: achievements[
                                        current
                                    ].descriptions.join("<br/><br/>"),
                                }}
                            />
                        </div>
                    </motion.main>
                </AnimatePresence>
                <div className="flex flex-row md:flex-col gap-2 items-center justify-center w-full md:w-fit">
                    <button
                        className={`w-4 h-4 rounded-full }`}
                        onClick={() => setIsPaused(!isPaused)}
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
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
