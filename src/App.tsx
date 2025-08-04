// import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
// import Navbar from "./components/shared/Navbar";
import Home from "./components/shared/Home";
// import Education from "./components/shared/Education";
import Skills from "./components/shared/Skills/Skills";
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
import { TbLayoutSidebar } from "react-icons/tb";
import Footer from "./components/shared/Footer";
import { ImHome } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa6";
import { BsTools } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import { HiUser } from "react-icons/hi2";
import { GrProjects } from "react-icons/gr";
import { scrollToSection } from "./lib/utils";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import AIFeaturesSection from "./components/shared/ProjectsV2.tsx";
import WhoAmI from "./components/shared/WhoAmI.tsx";

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
        name: "Education",
        href: "#education",
        icon: <FaGraduationCap />,
    },
    {
        name: "Contact me",
        href: "#contact",
        icon: <HiUser />,
    },
];

function App() {
    const [open, setOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("home");

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

    const [touchStart, setTouchStart] = React.useState({ x: 0, y: 0 });
    const [touchEnd, setTouchEnd] = React.useState({ x: 0, y: 0 });

    const minSwipeDistance = 60; // Minimum horizontal swipe distance
    const maxVerticalThreshold = 40; // Prevents vertical swipes from being detected

    interface TouchCoordinates {
        x: number;
        y: number;
    }

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
        const touchCoordinates: TouchCoordinates = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
        };
        setTouchStart(touchCoordinates);
        setTouchEnd(touchCoordinates); // Reset touch end
    };

    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
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
        setTouchStart({ x: 0, y: 0 }); // Reset touch start
        setTouchEnd({ x: 0, y: 0 }); // Reset touch end
    };

    React.useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log(entry);
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
            className="w-full h-dvh"
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
                                ${activeSection === item.href.slice(1)
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
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            <Parallax pages={8.37} style={{ top: 0, left: 0 }}
                className="thin-scrollbar"
            >
                <section id="home" className="w-full h-full relative">
                    <ParallaxLayer
                        offset={0}
                        speed={0.5}
                        style={{
                            backgroundImage: `url('/bgLayer4.png')`,
                            backgroundSize: "contain"
                        }}
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                        style={{
                            backgroundImage: `url('/bgLayer5.png')`,
                            backgroundSize: "contain",
                            marginTop: "-2px",
                        }}
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                        style={{
                            backgroundImage: `url('/bgLayer6.png')`,
                            backgroundSize: "contain"
                        }}
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                        style={{
                            backgroundImage: `url('/bgLayer7.png')`,
                            backgroundSize: "contain"
                        }}
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.6}
                        style={{
                            backgroundImage: `url('/bgLayer8.png')`,
                            backgroundSize: "contain"
                        }}
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.8}
                        style={{
                            backgroundImage: `url('/bgLayer9.png')`,
                            backgroundSize: "contain"
                        }}
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.5}
                        style={{
                            backgroundImage: `url('/bgLayer2.png')`,
                            backgroundSize: "contain"
                        }}
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.8}
                        style={{
                            backgroundImage: `url('/bgLayer.png')`,
                            backgroundSize: "contain",
                            position: "relative"
                        }}
                    >
                        <div className="w-full h-[650px] bg-background absolute bottom-0 left-0 translate-y-[97.5%]"></div>
                    </ParallaxLayer>
                    {/* <Navbar /> */}
                    <Home />
                </section>

                <ParallaxLayer
                    offset={1}
                    speed={0.4}
                    factor={1.9}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        zIndex: 1,
                    }}
                    className="flex-start mt-[-100px]"
                >
                    <WhoAmI />
                </ParallaxLayer>
                <ParallaxLayer
                    speed={0.8}
                    offset={2.9}
                    id="achievements"
                >
                    <Achievements setOpen={setOpen} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.7} // Adjust based on your sections positioning
                    speed={1.2} // speed={1} means no parallax effect - moves normally with scroll
                >
                    <Skills />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={0.8}
                    offset={4}
                >
                    <AIFeaturesSection />
                </ParallaxLayer>

                {/* <ParallaxLayer
                    offset={5.9}
                >
                    <Education2 />
                </ParallaxLayer> */}


                <ParallaxLayer
                    speed={1}
                    offset={7.2}
                >
                    <Contact />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={7.999}
                    speed={0.5}
                    factor={0.3}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start'
                    }}
                >
                    <Footer />
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default App;