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
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import AIFeaturesSection from "./components/shared/ProjectsV2.tsx";
import WhoAmI from "./components/shared/WhoAmI.tsx";
import { BiLineChart } from "react-icons/bi";
import { RiMailSendLine } from "react-icons/ri";

const navItems = [
    {
        name: "Home",
        href: "#home",
        icon: <ImHome />,
    },
    {
        name: "Who Am I",
        href: "#whoami",
        icon: <HiUser />,
    },
    {
        name: "Stats",
        href: "#stats",
        icon: <BiLineChart />,
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
        icon: <RiMailSendLine />,
    },
];

function App() {
    const [isHovered, setIsHovered] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState("home");
    const parallaxRef = React.useRef(null);

    const menuContainerVariants = {
        hidden: {
            width: "60px",
            transition: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        },
        visible: {
            width: "280px",
            transition: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const backgroundVariants = {
        hidden: {
            opacity: 0,
            backdropFilter: "blur(0px)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        visible: {
            opacity: 1,
            backdropFilter: "blur(12px)",
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const contentVariants = {
        hidden: {
            opacity: 0,
            x: -20,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: 0.1,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        hidden: {
            rotate: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        visible: {
            rotate: 180,
            scale: 1.1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    interface SectionOffsets {
        [key: string]: number;
    }

    const scrollToParallaxSection = (sectionName: string): void => {
        const sectionOffsets: SectionOffsets = {
            home: 0,
            whoami: 0.6,
            stats: 1.3,
            achievements: 3.48,
            skills: 4.33,
            projects: 5,
            contact: 8.1
        };

        if (parallaxRef.current && sectionOffsets[sectionName] !== undefined) {
            //@ts-expect-error - Parallax ref does not have proper TypeScript definitions for scrollTo method
            parallaxRef.current.scrollTo(sectionOffsets[sectionName]);
            setActiveSection(sectionName === 'whoami' ? 'home' : sectionName);
        }
    };

    function changePrimaryColor(color: string) {
        document.documentElement.style.setProperty("--primary", color);
        document.documentElement.style.setProperty("--ring", color);
    }

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
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="w-full h-dvh">
            <div className="h-full bg-transparent top-0 left-0 w-3 fixed z-[100]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            {/* Menu Container */}
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`fixed top-6 left-4 z-50 ${isHovered? "h-[94vh]": "h-auto"} flex flex-col`}
            >
                {/* Background Blur */}
                <motion.div
                    className="absolute inset-0 bg-background/30 rounded-2xl shadow-2xl border border-white/10"
                    variants={backgroundVariants}
                    animate={isHovered ? "visible" : "hidden"}
                    style={{
                        backdropFilter: isHovered ? "blur(12px)" : "blur(0px)",
                    }}
                />

                {/* Menu Container */}
                <motion.nav
                    className="relative flex flex-col bg-transparent rounded-2xl overflow-hidden flex-1"
                    variants={menuContainerVariants}
                    animate={isHovered ? "visible" : "hidden"}
                    style={{ height: "auto", minHeight: "60px" }}
                >
                    {/* Menu Icon */}
                    <div className="flex items-center justify-start p-4 h-[60px]">
                        <motion.div
                            variants={iconVariants}
                            animate={isHovered ? "visible" : "hidden"}
                        >
                            <TbLayoutSidebar className="text-foreground text-2xl" />
                        </motion.div>

                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    className="flex items-center gap-3 ml-4"
                                    variants={contentVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                >
                                    <img
                                        src="/me.png"
                                        alt=""
                                        className="rounded-full w-[32px] h-[32px] object-cover"
                                    />
                                    <h1 className="text-foreground text-xl font-medium whitespace-nowrap">
                                        Kanhaiya Yadav
                                    </h1>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Items */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                className="flex flex-col gap-1 px-4 pb-4"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        onClick={() => {
                                            scrollToParallaxSection(item.href.slice(1));
                                        }}
                                        className={`text-foreground flex items-center px-3 py-2.5 rounded-lg hover:bg-white/10 cursor-pointer gap-3 transition-colors duration-200 whitespace-nowrap
                                        ${activeSection === item.href.slice(1)
                                                ? "bg-primary/20 text-primary"
                                                : ""
                                            }
                                        `}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                delay: index * 0.05,
                                                duration: 0.3,
                                                ease: "easeOut"
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: -20,
                                            transition: {
                                                duration: 0.2,
                                                ease: "easeIn"
                                            }
                                        }}
                                        whileHover={{
                                            x: 4,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <span className="text-lg">{item.icon}</span>
                                        <span className="text-sm font-medium">{item.name}</span>
                                    </motion.div>
                                ))}

                                {/* Color Theme Selector */}
                                <motion.div
                                    className="mt-auto pt-3 border-t border-white/10"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: navItems.length * 0.05 + 0.1,
                                            duration: 0.3,
                                            ease: "easeOut"
                                        }
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 10,
                                        transition: {
                                            duration: 0.2,
                                            ease: "easeIn"
                                        }
                                    }}
                                >
                                    <Select
                                        onValueChange={(value) =>
                                            changePrimaryColor(value)
                                        }
                                    >
                                        <SelectTrigger className="w-full bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                                            <SelectValue placeholder="Color Theme" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-background/90 backdrop-blur-md border-white/10">
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
                                                        className="hover:bg-white/10"
                                                    >
                                                        <div className="flex items-center">
                                                            <FaCircle
                                                                className="mr-2 text-sm"
                                                                style={{
                                                                    color: color.hex,
                                                                }}
                                                            />
                                                            <span className="text-sm">{color.name}</span>
                                                        </div>
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            </div>

            <Parallax ref={parallaxRef} pages={9.37} style={{ top: 0, left: 0 }}
                className="thin-scrollbar"
            >
                <section id="home" className="w-full h-full relative">
                    <ParallaxLayer
                        offset={0}
                        speed={0.5}
                        style={{
                            backgroundImage: `url('/resized-images/bgLayer4.png')`,
                        }}
                        className="bg-center hidden md:block"
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                        style={{
                            backgroundImage: `url('/resized-images/bgLayer5.png')`,
                            marginTop: "-2px",
                        }}
                        className="bg-center hidden md:block"
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                        style={{
                            backgroundImage: `url('/resized-images/bgLayer6.png')`,
                        }}
                        className="bg-center hidden md:block"
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                        style={{
                            backgroundImage: `url('/resized-images/bgLayer7.png')`,
                        }}
                        className="bg-center hidden md:block"
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.6}
                        style={{
                            backgroundImage: `url('/resized-images/bgLayer8.png')`,
                        }}
                        className="bg-center hidden md:block"
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.8}
                        style={{
                            backgroundImage: `url('/resized-images/bgLayer9.png')`,
                        }}
                        className="bg-center hidden md:block"
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.5}
                        style={{
                            backgroundImage: `url('/resized-images/bgLayer2.png')`,
                        }}
                        className="bg-center hidden md:block"
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.8}
                        style={{
                            backgroundImage: `url('/resized-images/bgLayer.png')`,
                            position: "relative",
                        }}
                        className="bg-center hidden md:block"
                    >
                        <div className="w-full h-[650px] bg-background absolute bottom-0 left-0 translate-y-[97.5%]"></div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={0}
                        speed={0.8}
                        style={{
                            background: 'url(/resized-images/mobile2.jpg)',
                            backgroundPosition: "center bottom"
                        }}
                        className="flex-start mt-[-100px] md:hidden relative"
                    >
                        <div className="absolute w-full h-2 bg-background bottom-0 left-0 translate-y-[91.5%]"/>
                    </ParallaxLayer>
                    
                    {/* <Navbar /> */}
                    <Home />
                </section>

                <ParallaxLayer
                    offset={1}
                    speed={0.4}
                    factor={2.9}
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
                    offset={3.9}
                    id="achievements"
                >
                    <Achievements setOpen={() => { }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4.7}
                    speed={1.2}
                >
                    <Skills />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={0.8}
                    offset={5}
                >
                    <AIFeaturesSection />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={1}
                    offset={8.2}
                >
                    <Contact />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={8.999}
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