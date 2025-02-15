// import { useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from "./components/shared/Home";
import Divider from "./components/shared/Divider";
import Education from "./components/shared/Education";
import Skills from "./components/shared/Skills/Skills";
import Projects from "./components/shared/Projects";
import Contact from "./components/shared/Contact";
import Achievements from "./components/shared/Achievements";
import { colors } from "../constants/global";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaCircle } from "react-icons/fa";
import { Button } from "./components/ui/button";
import { useTheme } from "./Hooks/Theme";
import { LuMoon, LuSun } from "react-icons/lu";
import { TbLayoutSidebar } from "react-icons/tb";
import Footer from "./components/shared/Footer";
import { ImHome } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import { RiSendPlaneFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";

const navItems = [
    {
        name: "Home",
        href: "#home",
        icon: <ImHome />,
    },
    {
        name: "Achievements",
        href: "#achievements",
        icon: <GrAchievement />,
    },
    {
        name: "Education",
        href: "#education",
        icon: <FaGraduationCap />,
    },
    {
        name: "Skills",
        href: "#skills",
        icon: <BsTools />,
    },
    {
        name: "Projects",
        href: "#projects",
        icon: <GrProjects />,
    },
    {
        name: "Contact me",
        href: "#contact",
        icon: <RiSendPlaneFill />,
    },
];

function App() {
    const [open, setOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("home");
    const { theme, setTheme } = useTheme();

    const sidebarVariants = {
        hidden: { x: "-100%", opacity: 1 },
        visible: {
            x: "0%",
            opacity: 1,
            transition: { type: "tween", duration: 0.3 },
        },
        exit: {
            x: "-100%",
            opacity: 1,
            transition: { type: "tween", duration: 0.3 },
        },
    };

    function changePrimaryColor(color: string) {
        document.documentElement.style.setProperty("--primary", color);
        document.documentElement.style.setProperty("--ring", color);
    }

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [touchStart, setTouchStart] = React.useState({ x: 0, y: 0 });
    const [touchEnd, setTouchEnd] = React.useState({ x: 0, y: 0 });

    const minSwipeDistance = 60; // Minimum horizontal swipe distance
    const maxVerticalThreshold = 40; // Prevents vertical swipes from being detected

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
                console.log("Swiped Left!");
                setOpen(false);
            } else {
                console.log("Swiped Right!");
                setOpen(true);
            }
        }
        setTouchStart({x:0, y:0}); // Reset touch start
        setTouchEnd({x:0, y: 0}); // Reset touch end
    };

    React.useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // Trigger when 60% of the section is visible
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div
            className="flex"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div>
                <TbLayoutSidebar
                    className=" fixed top-6 left-4 text-foreground text-2xl z-10"
                    onClick={() => setOpen(!open)}
                />
            </div>

            {open && (
                <div
                    className="bg-black/60 w-screen fixed h-screen z-50 top-0 left-0"
                    onClick={() => setOpen(false)}
                />
            )}

            <AnimatePresence>
                {open && (
                    <motion.nav
                        className="fixed left-0 top-0 h-full flex flex-col items-center bg-background p-4 gap-4 w-64 z-50"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={sidebarVariants}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside nav
                    >
                        <div className="flex items-center gap-4 w-full mb-[20px] cursor-default">
                            <img
                                src="/me.png"
                                alt=""
                                className="rounded-full w-[40px]"
                            />
                            <h1 className="text-foreground text-2xl font-medium">
                                Kanhaiya
                            </h1>
                            <TbLayoutSidebar
                                className="text-foreground text-2xl ml-auto"
                                onClick={() => setOpen(false)}
                            />
                        </div>

                        {navItems.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    scrollToSection(item.href.slice(1));
                                    setOpen(false);
                                }}
                                className={`w-full text-foreground flex items-center pl-4 pr-10 py-2 rounded-lg hover:bg-accent cursor-default gap-4
                                ${
                                    activeSection === item.href.slice(1)
                                        ? "bg-primary"
                                        : ""
                                }
                                    `}
                            >
                                {item.icon}
                                {item.name}
                            </div>
                        ))}
                        <div className="mt-auto flex flex-col gap-2">
                            <Select
                                onValueChange={(value) =>
                                    changePrimaryColor(value)
                                }
                            >
                                <SelectTrigger className="w-[220px] shadow-md bg-accent dark:border-none">
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
                                            <SelectItem
                                                key={index}
                                                value={color.value}
                                            >
                                                <div className="flex items-center">
                                                    <FaCircle
                                                        className={`mr-2 text-lg`}
                                                        style={{
                                                            color: color.hex,
                                                        }}
                                                    />
                                                    {color.name}
                                                </div>
                                            </SelectItem>
                                        )
                                    )}
                                </SelectContent>
                            </Select>

                            <Button
                                variant={"outline"}
                                onClick={() => {
                                    setTheme(
                                        theme === "dark" ? "light" : "dark"
                                    );
                                }}
                                className="shadow-md border-[#8e8d87] dark:border-none bg-accent flex w-full gap-2"
                            >
                                {theme === "dark" ? (
                                    <>
                                        <LuSun className="scale-105 hover:rotate-90" />
                                        Light Theme
                                    </>
                                ) : (
                                    <>
                                        <LuMoon />
                                        Dark Theme
                                    </>
                                )}
                            </Button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
            <div className="relative w-full flex flex-col justify-center items-center overflow-hidden gap-[20px] md:gap-[50px] xl:gap-[100px]">
                <section id="home" className="w-full relative">
                    <div className="absolute w-full h-full left-0 top-[-5px] z-0 dark:flex dark:flex-col hidden">
                        <div className="bg-primary flex-1 max-h-[80px] xs:max-h-[110px] sm:max-h-[90px] lg:max-h-[50px] xl:max-h-[30px]"></div>
                        <svg
                            id="visual"
                            className="w-full"
                            viewBox="0 0 960 540"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                        >
                            <path
                                className="fill-primary/50"
                                d="M0 81L26.7 94.5C53.3 108 106.7 135 160 143.8C213.3 152.7 266.7 143.3 320 126.7C373.3 110 426.7 86 480 89.8C533.3 93.7 586.7 125.3 640 130.5C693.3 135.7 746.7 114.3 800 107.8C853.3 101.3 906.7 109.7 933.3 113.8L960 118L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z"
                            ></path>
                            <path
                                className="fill-primary"
                                d="M0 93L26.7 95.5C53.3 98 106.7 103 160 97C213.3 91 266.7 74 320 60.7C373.3 47.3 426.7 37.7 480 40.2C533.3 42.7 586.7 57.3 640 70C693.3 82.7 746.7 93.3 800 92.5C853.3 91.7 906.7 79.3 933.3 73.2L960 67L960 0L933.3 0C906.7 0 853.3 0 800 0C746.7 0 693.3 0 640 0C586.7 0 533.3 0 480 0C426.7 0 373.3 0 320 0C266.7 0 213.3 0 160 0C106.7 0 53.3 0 26.7 0L0 0Z"
                            ></path>
                        </svg>
                    </div>
                    <Navbar />
                    <Home />
                </section>
                <Divider />
                <Achievements setOpen={setOpen} />
                <Divider />
                <Skills />
                <Divider />
                <Projects />
                <Divider />
                <Education />
                <Divider />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
