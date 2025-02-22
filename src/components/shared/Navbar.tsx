import { Button } from "../ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaCircle } from "react-icons/fa";
import { colors } from "../../../constants/global";
import { useTheme } from "@/Hooks/Theme";
import { motion } from "framer-motion";

const Navbar = () => {

    function changePrimaryColor(color: string) {
        document.documentElement.style.setProperty("--primary", color);
        document.documentElement.style.setProperty("--ring", color);
    }

    const moonPath =
        "M600 400C600 510.457 510.457 600 400 600C289.543 600 200 510.457 200 400C200 289.543 289.543 200 400 200C237.5 379 432 540.5 600 400Z";
    const sunPath =
        "M600 400C600 510.457 510.457 600 400 600C289.543 600 200 510.457 200 400C200 289.543 289.543 200 400 200C510.457 200 600 289.543 600 400Z";

    const raysVariant = {
        hidden: {
            strokeOpacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        visible: {
            strokeOpacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const rayVariant = {
        hidden: {
            pathLength: 0,
            opacity: 0,
            scale: 0,
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                pathLenght: { duration: 0.3 },
                scale: { duration: 0.3 },
            },
        },
    };

    const { theme, setTheme } = useTheme();

    return (
        <nav
            id="navbar"
            className="w-full flex items-center justify-between px-[20px] sm:px-[50px] md:px-[100px] xl:px-[120px] py-6 bg-transparent rounded-[5px] shadow-none border-none relative"
        >
            <div className="ml-auto">
                <ul className="flex items-center space-x-2">
                    <Button
                        size={"icon"}
                        variant={"outline"}
                        onClick={() => {
                            setTheme(theme === "dark" ? "light" : "dark");
                        }}
                        className="shadow-md border-[#8e8d87] dark:border-none dark:bg-black/50 bg-accent "
                    >
                        <motion.svg
                            width="800"
                            height="800"
                            viewBox="0 0 800 800"
                            xmlns="http://www.w3.org/2000/svg"
                            className={"relative"}
                        >
                            <motion.path
                                initial={{
                                    fillOpacity: 0,
                                    strokeOpacity: 0,
                                }}
                                animate={
                                    theme === "dark"
                                        ? {
                                              stroke: "orange",
                                              strokeOpacity: 1,
                                              fillOpacity: 1,
                                              fill: "yellow",
                                              d: sunPath,
                                          }
                                        : {
                                              strokeOpacity: 1,
                                              fillOpacity: 0.35,
                                              stroke: "blue",
                                              fill: "blue",
                                              d: moonPath,
                                              scale: 1.9,
                                              x: "-44%",
                                              y: "-45%",
                                              transformOrigin: "center center",
                                          }
                                }
                                strokeWidth={30}
                            />
                            <motion.g
                                variants={raysVariant}
                                initial="hidden"
                                animate={
                                    theme === "dark" ? "visible" : "hidden"
                                }
                                fill="yellow"
                            >
                                <motion.path
                                    variants={rayVariant}
                                    d="M366.667 33.3333C366.667 14.9238 381.59 0 400 0C418.41 0 433.333 14.9238 433.333 33.3333V100C433.333 118.409 418.41 133.333 400 133.333C381.59 133.333 366.667 118.409 366.667 100V33.3333Z"
                                />
                                <motion.path
                                    variants={rayVariant}
                                    d="M682.843 117.157C669.823 104.14 648.72 104.14 635.703 117.157L588.56 164.298C575.543 177.315 575.543 198.421 588.56 211.438C601.58 224.456 622.683 224.456 635.703 211.438L682.843 164.298C695.86 151.28 695.86 130.175 682.843 117.157Z"
                                />
                                <motion.path
                                    variants={rayVariant}
                                    d="M700 433.333C681.59 433.333 666.667 418.41 666.667 400C666.667 381.59 681.59 366.667 700 366.667H766.667C785.077 366.667 800 381.59 800 400C800 418.41 785.077 433.333 766.667 433.333H700Z"
                                />
                                <motion.path
                                    variants={rayVariant}
                                    d="M588.56 588.563C575.543 601.58 575.543 622.683 588.56 635.703L635.703 682.843C648.72 695.86 669.823 695.86 682.843 682.843C695.86 669.827 695.86 648.72 682.843 635.703L635.703 588.563C622.683 575.543 601.58 575.543 588.56 588.563Z"
                                />
                                <motion.path
                                    variants={rayVariant}
                                    d="M366.667 700C366.667 681.59 381.59 666.667 400 666.667C418.41 666.667 433.333 681.59 433.333 700V766.667C433.333 785.076 418.41 800 400 800C381.59 800 366.667 785.076 366.667 766.667V700Z"
                                />
                                <motion.path
                                    variants={rayVariant}
                                    d="M211.438 588.563C198.421 575.543 177.315 575.543 164.298 588.563L117.158 635.703C104.14 648.72 104.14 669.827 117.158 682.843C130.175 695.86 151.281 695.86 164.298 682.843L211.438 635.703C224.456 622.683 224.456 601.58 211.438 588.563Z"
                                />
                                <motion.path
                                    variants={rayVariant}
                                    d="M33.3333 433.333C14.9238 433.333 0 418.41 0 400C0 381.59 14.9238 366.667 33.3333 366.667H100C118.409 366.667 133.333 381.59 133.333 400C133.333 418.41 118.409 433.333 100 433.333H33.3333Z"
                                />
                                <motion.path
                                    variants={rayVariant}
                                    d="M117.157 117.157C104.14 130.175 104.14 151.28 117.157 164.298L164.298 211.438C177.315 224.456 198.421 224.456 211.438 211.438C224.456 198.421 224.456 177.315 211.438 164.298L164.298 117.157C151.28 104.14 130.175 104.14 117.157 117.157Z"
                                />
                            </motion.g>
                            <defs>
                                <clipPath id="clip0_4456_25">
                                    <rect width="800" height="800" />
                                </clipPath>
                            </defs>
                        </motion.svg>
                    </Button>
                    <Select
                        onValueChange={(value) => changePrimaryColor(value)}
                    >
                        <SelectTrigger className="w-[120px] md:w-[180px] shadow-md dark:bg-black/50 bg-accent dark:border-none text-xs sm:text-sm ">
                            <SelectValue placeholder="Color Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            {colors.map(
                                (
                                    color: {
                                        name: string;
                                        value: string;
                                        hex: string;
                                    },
                                    index: number
                                ) => (
                                    <SelectItem key={index} value={color.value}>
                                        <div className="flex items-center">
                                            <FaCircle
                                                className={`mr-2 text-lg`}
                                                style={{ color: color.hex }}
                                            />
                                            {color.name}
                                        </div>
                                    </SelectItem>
                                )
                            )}
                        </SelectContent>
                    </Select>
                    {/* <Button className="dark:bg-black/20 text-white">
                        Hire me
                    </Button> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
