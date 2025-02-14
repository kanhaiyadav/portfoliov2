import { Button } from "../ui/button";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { motion } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import SocialButton from "./SocialButton";

const Home = () => {
    const pathVariants = {
        hidden: {
            strokeDasharray: 1200, // Total length of the motion.path
            strokeDashoffset: 1200, // Initially hidden
        },
        visible: {
            strokeDashoffset: 0, // Fully drawn
            transition: {
                duration: 4, // Animation duration
                ease: "easeInOut",
                delay: 0.5, // Smoothing effect
            },
        },
    };

    return (
        <div className="flex justify-center items-center w-full px-[100px] h-screen m-auto relative">
            <div className="w-fit flex flex-col items-center mt-[-100px] h-fit">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Hello I'm</h1>
                <h1 className="text-primary/90 text-4xl md:text-6xl lg:text-7xl ">Kanhaiya Yadav,</h1>
                <motion.svg
                    className={"w-[350px] md:w-[500px] lg:w-[700px] my-4 md:my-6 lg:my-8"}
                    //   id="new-logo"
                    width="1206"
                    viewBox="0 0 1206 112"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.path
                        data-index="0"
                        d="M1116.23 107V108.5H1117.73H1154.5H1156V107V98.1406V96.8763L1154.75 96.6623L1144.54 94.9076V62.7695L1163.78 62.4153L1183.93 107.611L1184.32 108.5H1185.3H1202.38H1203.88V107V97.9297V96.6734L1202.65 96.453L1196.31 95.3246L1180.1 60.237C1181.3 59.8581 1182.46 59.4285 1183.57 58.9477L1183.58 58.9427C1188.61 56.7245 1192.53 53.4446 1195.28 49.0965C1198.09 44.7254 1199.45 39.3893 1199.45 33.1719C1199.45 26.8568 1198.07 21.4075 1195.21 16.9005C1192.36 12.3966 1188.2 9.00133 1182.8 6.69423C1177.45 4.33949 1170.95 3.19531 1163.36 3.19531H1117.73H1116.23V4.69531V13.5547V14.819L1117.47 15.033L1127.69 16.7877V94.9076L1117.47 96.6623L1116.23 96.8763V98.1406V107ZM1161.95 48.8984H1144.54V17.0234H1163.36C1170.25 17.0234 1175.04 18.5585 1178.02 21.3325C1181.04 24.1408 1182.6 27.9802 1182.6 33.0312C1182.6 38.3738 1180.96 42.218 1177.86 44.8202C1174.75 47.4358 1169.56 48.8984 1161.95 48.8984Z"
                        //   stroke="gray"
                        className="stroke-gray-500 stroke-[4]"
                        stroke-width="3"
                        variants={pathVariants}
                    />
                    <motion.path
                        data-index="1"
                        d="M1024.4 107V108.5H1025.9H1103.88H1105.38V107V82.4609V80.9609H1103.88H1092.84H1091.49L1091.34 82.2977L1089.94 95.0938H1052.71V61.0391H1088.97H1090.47V59.5391V48.6406V47.1406H1088.97H1052.71V16.8125H1087.7L1089.1 29.4L1089.24 30.7344H1090.59H1101.7H1103.2V29.2344V4.625V3.125H1101.7H1025.9H1024.4V4.625V13.5547V14.819L1025.64 15.033L1035.86 16.7877V94.9076L1025.64 96.6623L1024.4 96.8763V98.1406V107Z"
                        //   stroke="gray"
                        className="stroke-gray-500 stroke-[4]"
                        stroke-width="3"
                        variants={pathVariants}
                    />
                    <motion.path
                        data-index="2"
                        d="M933.133 107V108.5H934.633H971.406H972.906V107V98.1406V96.8763L971.66 96.6623L961.445 94.9076V67.4375H981.672C989.153 67.4375 995.626 66.1431 1001.04 63.4871C1006.43 60.8374 1010.6 57.0815 1013.48 52.2171C1016.35 47.3574 1017.77 41.6942 1017.77 35.2812C1017.77 28.9129 1016.35 23.2737 1013.48 18.4157C1010.6 13.5528 1006.44 9.7977 1001.04 7.14812C995.629 4.44334 989.154 3.125 981.672 3.125H946.094H934.633H933.133V4.625V13.5547V14.819L934.379 15.033L944.594 16.7877V94.9076L934.379 96.6623L933.133 96.8763V98.1406V107ZM996.11 48.5361L996.109 48.5367C993.066 51.8306 988.354 53.6094 981.672 53.6094H961.445V17.0234H981.672C988.343 17.0234 993.05 18.8428 996.097 22.223L996.097 22.223L996.104 22.2305C999.293 25.7216 1000.91 30.0827 1000.91 35.4219C1000.91 40.7612 999.293 45.0948 996.11 48.5361Z"
                        //   stroke="gray"
                        className="stroke-gray-500 stroke-[4]"
                        stroke-width="3"
                        variants={pathVariants}
                    />
                    <motion.path
                        data-index="3"
                        d="M848.939 94.9205L848.944 94.9271L848.949 94.9336C852.79 99.6983 857.443 103.402 862.895 106.031C868.374 108.672 874.531 109.977 881.336 109.977C888.502 109.977 894.871 108.677 900.405 106.033C905.91 103.402 910.525 99.6919 914.232 94.9118C917.971 90.104 920.77 84.4439 922.644 77.9554C924.517 71.4723 925.445 64.3455 925.445 56.5859V55.1094C925.445 47.3969 924.517 40.2946 922.645 33.8131C920.771 27.2791 917.973 21.5949 914.234 16.7858C910.527 11.959 905.912 8.22393 900.405 5.59191C894.871 2.94754 888.502 1.64844 881.336 1.64844C874.531 1.64844 868.374 2.95256 862.895 5.59416C857.439 8.22497 852.785 11.9545 848.945 16.7675L848.945 16.7675L848.939 16.7748C845.155 21.5778 842.263 27.2554 840.246 33.784L840.246 33.7839L840.244 33.7907C838.274 40.2792 837.297 47.3894 837.297 55.1094V56.5859C837.297 64.3518 838.274 71.4856 840.244 77.975L840.247 77.9847C842.264 84.4667 845.156 90.1194 848.939 94.9205ZM896.852 90.7115L896.846 90.7166C893.005 93.8234 887.883 95.4453 881.336 95.4453C875.489 95.4453 870.627 93.846 866.661 90.7094C862.647 87.4883 859.559 83.0008 857.434 77.169C855.302 71.2716 854.219 64.419 854.219 56.5859V54.9688C854.219 47.1826 855.302 40.4031 857.432 34.603L857.433 34.5994C859.559 28.7642 862.649 24.2747 866.665 21.0529C870.632 17.8708 875.492 16.25 881.336 16.25C887.778 16.25 892.88 17.8897 896.774 21.0478L896.774 21.0478L896.782 21.0541C900.734 24.2158 903.679 28.6612 905.574 34.48L905.574 34.48L905.578 34.4933C907.531 40.3054 908.523 47.1222 908.523 54.9688V56.5859C908.523 64.4812 907.554 71.3736 905.644 77.2856C903.75 83.1044 900.804 87.5498 896.852 90.7115Z"
                        //   stroke="gray"
                        className="stroke-gray-500 stroke-[4]"
                        stroke-width="3"
                        variants={pathVariants}
                    />
                    <motion.path
                        data-index="4"
                        d="M757.633 107V108.5H759.133H832.891H834.391V107V80.2109V78.7109H832.891H822.273H820.916L820.781 80.0617L819.299 94.8828H785.945V16.7877L796.16 15.033L797.406 14.819V13.5547V4.625V3.125H795.906H784.445H770.594H759.133H757.633V4.625V13.5547V14.819L758.879 15.033L769.094 16.7877V94.9076L758.879 96.6623L757.633 96.8763V98.1406V107Z"
                        //   stroke="gray"
                        className="stroke-gray-500 stroke-[4]"
                        stroke-width="3"
                        variants={pathVariants}
                    />
                    <motion.path
                        data-index="5"
                        d="M665.805 107V108.5H667.305H745.281H746.781V107V82.4609V80.9609H745.281H734.242H732.897L732.751 82.2977L731.351 95.0938H694.117V61.0391H730.375H731.875V59.5391V48.6406V47.1406H730.375H694.117V16.8125H729.103L730.501 29.4L730.65 30.7344H731.992H743.102H744.602V29.2344V4.625V3.125H743.102H667.305H665.805V4.625V13.5547V14.819L667.051 15.033L677.266 16.7877V94.9076L667.051 96.6623L665.805 96.8763V98.1406V107Z"
                        //   stroke="gray"
                        className="stroke-gray-500 stroke-[4]"
                        stroke-width="3"
                        variants={pathVariants}
                    />
                    <motion.path
                        data-index="6"
                        d="M601.211 107.523L601.574 108.5H602.617H614.5H615.543L615.906 107.523L649.906 16.0442L657.242 15.0409L658.539 14.8635V13.5547V4.625V3.125H657.039H624.766H623.266V4.625V13.5547V14.8656L624.565 15.0412L633.124 16.1979L609.997 79.6268L609.985 79.6594L609.975 79.6925L608.699 83.7677L607.501 79.7153L607.49 79.6786L607.477 79.6425L585.154 16.232L592.726 15.0363L593.992 14.8364V13.5547V4.625V3.125H592.492H560.148H558.648V4.625V13.5547V14.862L559.943 15.0406L567.211 16.0431L601.211 107.523Z"
                        //   stroke="gray"
                        className="stroke-gray-500 stroke-[4]"
                        stroke-width="3"
                        variants={pathVariants}
                    />
                    <motion.path
                        data-index="7"
                        d="M467.945 107V108.5H469.445H547.422H548.922V107V82.4609V80.9609H547.422H536.383H535.038L534.892 82.2977L533.491 95.0938H496.258V61.0391H532.516H534.016V59.5391V48.6406V47.1406H532.516H496.258V16.8125H531.243L532.642 29.4L532.79 30.7344H534.133H545.242H546.742V29.2344V4.625V3.125H545.242H469.445H467.945V4.625V13.5547V14.819L469.191 15.033L479.406 16.7877V94.9076L469.191 96.6623L467.945 96.8763V98.1406V107Z"
                        //   stroke="gray"
                        className="stroke-gray-500 stroke-[4]"
                        stroke-width="3"
                        variants={pathVariants}
                    />
                    <motion.path
                        data-index="8"
                        d="M372.602 107V108.5H374.102H414.883C424.18 108.5 432.305 106.256 439.193 101.713L439.195 101.712C446.089 97.1482 451.398 90.9581 455.119 83.1784L455.12 83.1752C458.837 75.3562 460.68 66.6008 460.68 56.9375V54.7578C460.68 44.8582 458.766 35.9989 454.898 28.2153C451.034 20.4386 445.605 14.2976 438.614 9.83092C431.638 5.34331 423.473 3.125 414.18 3.125H385.562H374.102H372.602V4.625V13.5547V14.819L373.848 15.033L384.062 16.7877V94.9076L373.848 96.6623L372.602 96.8763V98.1406V107ZM440.151 76.1084L440.149 76.1137C437.756 81.8015 434.347 86.3165 429.935 89.7052C425.584 92.9998 420.358 94.6719 414.18 94.6719H400.914V17.0234H414.18C420.369 17.0234 425.602 18.6547 429.954 21.8635C434.353 25.1076 437.757 29.5444 440.149 35.23L440.151 35.2367L440.154 35.2433C442.592 40.886 443.828 47.3347 443.828 54.6172V56.9375C443.828 63.978 442.595 70.3613 440.151 76.1084Z"
                        //   stroke="gray"
                        className="stroke-gray-500 stroke-[4]"
                        stroke-width="3"
                        variants={pathVariants}
                    />
                    <motion.path
                        data-index="9"
                        d="M243.789 107V108.5H245.289H293.805C304.441 108.5 313.06 105.983 319.497 100.784L319.503 100.78C326.014 95.4704 329.195 87.8311 329.195 78.1016C329.195 73.6873 328.336 69.6046 326.599 65.8763C324.914 62.1142 322.503 58.9318 319.374 56.3477C317.251 54.5626 314.852 53.1809 312.189 52.1967C315.416 50.4859 318.146 48.2564 320.357 45.5014C323.473 41.6315 325.047 37.2235 325.047 32.3281C325.047 22.7407 321.888 15.3352 315.389 10.3957C309.039 5.48588 300.33 3.125 289.445 3.125H256.75H245.289H243.789V4.625V13.5547V14.819L245.035 15.033L255.25 16.7877V94.9076L245.035 96.6623L243.789 96.8763V98.1406V107ZM308.2 65.0804L308.2 65.0804L308.208 65.0894C310.858 68.1604 312.273 72.4827 312.273 78.2422C312.273 83.6327 310.631 87.6164 307.501 90.4126C304.393 93.1841 299.898 94.6719 293.805 94.6719H272.102V60.4766H295.914C301.682 60.4766 305.669 62.1002 308.2 65.0804ZM303.557 20.8447L303.557 20.8448L303.567 20.8525C306.582 23.2157 308.195 26.8474 308.195 32.0469C308.195 36.6785 306.768 40.1921 304.028 42.7661C301.31 45.3161 297.695 46.6484 293.031 46.6484H272.102V17.0234H289.445C295.825 17.0234 300.455 18.3714 303.557 20.8447Z"
                        //   stroke="gray"
                        className="stroke-gray-500 stroke-[4]"
                        stroke-width="3"
                        variants={pathVariants}
                    />
                    <motion.path
                        data-index="10"
                        d="M151.961 107V108.5H153.461H231.438H232.938V107V82.4609V80.9609H231.438H220.398H219.054L218.907 82.2977L217.507 95.0938H180.273V61.0391H216.531H218.031V59.5391V48.6406V47.1406H216.531H180.273V16.8125H215.259L216.658 29.4L216.806 30.7344H218.148H229.258H230.758V29.2344V4.625V3.125H229.258H153.461H151.961V4.625V13.5547V14.819L153.207 15.033L163.422 16.7877V94.9076L153.207 96.6623L151.961 96.8763V98.1406V107Z"
                        //   stroke="gray"
                        className="stroke-gray-500 stroke-[4]"
                        stroke-width="3"
                        variants={pathVariants}
                    />
                    <motion.path
                        data-index="11"
                        d="M34.165 107.376L34.4559 108.5H35.6172H47.9922H49.0929L49.4231 107.45L71.7122 36.575L71.7224 36.5425L71.7311 36.5097L73.25 30.7844L74.8104 36.5188L74.8179 36.5464L74.8265 36.5737L97.0452 107.449L97.3748 108.5H98.4766H111.625H112.798L113.081 107.361L135.756 15.9643L142.827 15.0421L144.133 14.8717V13.5547V4.625V3.125H142.633H110.008H108.508V4.625V13.5547V14.8579L109.798 15.04L119.634 16.4278L106.794 71.2008L104.326 80.5981L101.606 71.1475L101.601 71.1323L101.596 71.1171L80.7839 4.17964L80.456 3.125H79.3516H67.1875H66.0797L65.7539 4.18377L45.1533 71.1181L45.1523 71.1213L42.4761 79.7497L40.4523 71.1486L40.4517 71.146L27.468 16.4096L36.4759 15.0376L37.75 14.8435V13.5547V4.625V3.125H36.25H3.0625H1.5625V4.625V13.5547V14.8829L2.88092 15.0437L10.5148 15.9746L34.165 107.376Z"
                        //   stroke="gray"
                        className="stroke-gray-500 stroke-[4]"
                        stroke-width="3"
                        variants={pathVariants}
                    />
                </motion.svg>
                <motion.div
                    className="max-w-[900px] flex flex-col gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 1,
                        type: "spring",
                        stiffness: 120,
                    }}
                >
                    <p className="text-gray-500 w-full text-center">
                        I am immersed in the world of web development,
                        specializing in the MERN stack (MongoDB, Express.js,
                        React, Node.js).
                        <br /> My enthusiasm for exploring and mastering new
                        technologies drives me to constantly expand my skill
                        set. Currently, I am delving into the powerful
                        capabilities of Next.js to further elevate my
                        development expertise.
                    </p>
                    <div className="flex justify-center gap-4 items-center">
                        <Dialog>
                            <DialogTrigger className="inline-flex p-3 px-4 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-transparent outline outline-2 outline-primary text-primary hover:bg-primary hover:text-black">
                                <IoDocumentTextOutline />
                                My Resume
                            </DialogTrigger>
                            <DialogContent className="w-[70vw] max-w-[90vw]">
                                <DialogHeader>
                                    <DialogTitle>Resume</DialogTitle>
                                    <DialogDescription>
                                        this is the preview of my resume.
                                    </DialogDescription>
                                </DialogHeader>
                                <iframe
                                    src="/myResume.pdf"
                                    width="100%"
                                    height="600px"
                                ></iframe>
                            </DialogContent>
                        </Dialog>
                        <Button size={"lg"} className="py-6 px-10">
                            Hire Me
                        </Button>
                    </div>
                    <div className="m-auto flex items-center gap-4">
                        <SocialButton text="LinkedIn">
                            <Button
                                variant={"custom"}
                                size={"icon"}
                                className="z-10 bg-background"
                            >
                                <FaLinkedinIn />
                            </Button>
                        </SocialButton>
                        <SocialButton text="Github">
                            <Button
                                variant={"custom"}
                                size={"icon"}
                                className="z-10 bg-background"
                            >
                                <LuGithub />
                            </Button>
                        </SocialButton>

                        <SocialButton text="Facebook">
                            <Button
                                variant={"custom"}
                                size={"icon"}
                                className="z-10 bg-background"
                            >
                                <FaFacebookF />
                            </Button>
                        </SocialButton>

                        <SocialButton text="Twitter">
                            <Button
                                variant={"custom"}
                                size={"icon"}
                                className="z-10 bg-background"
                            >
                                <RiTwitterXLine />
                            </Button>
                        </SocialButton>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
