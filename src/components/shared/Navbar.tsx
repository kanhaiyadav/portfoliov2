import { Button } from "../ui/button";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
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
import { useEffect, useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
    function changePrimaryColor(color: string) {
        document.documentElement.style.setProperty("--primary", color);
        document.documentElement.style.setProperty("--ring", color);
    }

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log("scrolling");
            const nav = document.getElementById("navbar");
            console.log("Home Section:", nav);
            if (nav) {
                const navBottom = nav.getBoundingClientRect().bottom;
                setShowButton(navBottom < 0); // Show button if home section is out of view
            }
        };
        const root = document.getElementById("root");
        if (root) {
            root.addEventListener("scroll", handleScroll);
            return () => root.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollToHome = () => {
        const homeSection = document.getElementById("home");
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const { theme, setTheme } = useTheme();

    return (
        <nav
            id="navbar"
            className="w-full flex items-center justify-between px-[120px] py-6 bg-background dark:bg-transparent rounded-[5px] dark:shadow-none shadow-card border-gray-400 border-2 dark:border-none ring-1 ring-transparent border-dashed border-l-0 border-r-0 border-t-0 relative"
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
                        {theme === "dark" ? (
                            <LuSun className="scale-105 hover:rotate-90" />
                        ) : (
                            <LuMoon />
                        )}
                    </Button>
                    <Select
                        onValueChange={(value) => changePrimaryColor(value)}
                    >
                        <SelectTrigger className="w-[180px] shadow-md dark:bg-black/50 bg-accent dark:border-none">
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
            {showButton && (
                <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
                    <motion.div
                        className="bg-primary rounded-full p-2 outline outline-2 outline-primary outline-offset-2 hover:shadow-[0_0_10px_0_white] cursor-pointer"
                        onClick={scrollToHome}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <FaAnglesUp className="text-white" />
                    </motion.div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
