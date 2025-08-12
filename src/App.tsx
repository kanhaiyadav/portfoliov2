// import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
// import Navbar from "./components/shared/Navbar";
import Home from "./components/shared/Home";
// import Education from "./components/shared/Education";
import Skills from "./components/shared/Skills/Skills";
import Contact from "./components/shared/Contact";
import Achievements from "./components/shared/Achievements";
// import { colors } from "../constants/global";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
// import { FaCircle } from "react-icons/fa";
import { TbLayoutSidebar } from "react-icons/tb";
import Footer from "./components/shared/Footer";
import { ImHome } from "react-icons/im";
import { BsTools } from "react-icons/bs";
import { GrAchievement } from "react-icons/gr";
import { HiUser } from "react-icons/hi2";
import { GrProjects } from "react-icons/gr";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import AIFeaturesSection from "./components/shared/ProjectsV2.tsx";
import WhoAmI from "./components/shared/WhoAmI.tsx";
import { RiMailSendLine } from "react-icons/ri";
import Experience from "./components/shared/Experience.tsx";
import { TbRoute } from "react-icons/tb";

const navItems = [
    {
        name: "Home",
        key: "home",
        icon: <ImHome />,
    },
    {
        name: "Who Am I",
        key: "whoami",
        icon: <HiUser />,
    },
    {
        name: "Career Path",
        key: "career_path",
        icon: <TbRoute />,
    },
    {
        name: "Achievements",
        key: "achievements",
        icon: <GrAchievement />,
    },
    {
        name: "Skills & Stats",
        key: "skills_stats",
        icon: <BsTools />,
    },
    {
        name: "Projects",
        key: "projects",
        icon: <GrProjects />,
    },
    {
        name: "Contact me",
        key: "contact",
        icon: <RiMailSendLine />,
    },
];

function App() {
    const [isHovered, setIsHovered] = React.useState(false);
    //@ts-expect-error - activeSection is managed by intersection observer but not directly used in JSX
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [activeSection, setActiveSection] = React.useState("home");
    const sectionNameRef = React.useRef<string>('home');
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
            whoami: 0.8,
            career_path: 1.5,
            achievements: 2.45,
            skills_stats: 3.3,
            projects: 5.12,
            contact: 8
        };

        if (parallaxRef.current && sectionOffsets[sectionName] !== undefined) {
            //@ts-expect-error - Parallax ref does not have proper TypeScript definitions for scrollTo method
            parallaxRef.current.scrollTo(sectionOffsets[sectionName]);
        }
    };

    // function changePrimaryColor(color: string) {
    //     document.documentElement.style.setProperty("--primary", color);
    //     document.documentElement.style.setProperty("--ring", color);
    // }

    React.useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        sectionNameRef.current = entry.target.id;
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
                                    <h1 className="text-foreground text-xl sm:text-2xl whitespace-nowrap font-semibold">
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
                                            scrollToParallaxSection(item.key);
                                            sectionNameRef.current = item.key;
                                            setIsHovered(false);
                                        }}
                                        className={`text-foreground text-base sm:text-lg font-medium flex items-center px-3 py-2.5 rounded-lg hover:bg-white/10 cursor-pointer gap-3 transition-colors duration-200 whitespace-nowrap
                                        ${sectionNameRef.current === item.key
                                                ? "bg-primary/20 text-primary font-semibold text-xl"
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
                                        <span className="">{item.name}</span>
                                    </motion.div>
                                ))}

                                {/* Color Theme Selector */}
                                {/* <motion.div
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
                                </motion.div> */}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            </div>

            <Parallax ref={parallaxRef} pages={9.4} style={{ top: 0, left: 0 }}
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
                    <ParallaxLayer
                        offset={0}
                        speed={0.8}
                        className="bg-gradient-to-b from-black/40 to-transparent "
                    />

                    {/* <Navbar /> */}
                    <Home parallaxRef={parallaxRef} />
                </section>

                <ParallaxLayer
                    offset={1}
                    speed={0.4}
                    factor={0.9}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        zIndex: 1,
                    }}
                    className="flex-start mt-[-150px]"
                >
                    <WhoAmI />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.9}
                    speed={0.5}
                    sticky={{ start: 1.9, end: 2 }}
                    style={{ pointerEvents: 'none' }}
                >
                    <img
                        style={{
                            pointerEvents: 'auto', // Re-enable pointer events only for the airplane if needed
                        }}
                        src="/experience/airplane.png"
                        className="w-[50px] md:w-auto relative rotate-90 left-[10%] sm:left-1/2 top-[100px] -translate-x-1/2"
                        alt="Airplane navigation icon"
                    />
                </ParallaxLayer>
                
                <ParallaxLayer
                    offset={1.9}
                    speed={0.6}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        zIndex: 100,
                    }}
                >
                    <Experience />
                </ParallaxLayer>


                <ParallaxLayer
                    speed={0.8}
                    offset={2.9}
                    id="achievements"
                >
                    <Achievements setOpen={() => { }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.7}
                    speed={1.2}
                    factor={1.5}
                >
                    <Skills />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={0.8}
                    offset={5.2}
                >
                    <AIFeaturesSection />
                </ParallaxLayer>

                <ParallaxLayer
                    speed={1}
                    offset={8}
                    factor={0.8}
                >
                    <Contact />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={8.8}
                    speed={0.5}
                    factor={0.8}
                    className="flex flex-col justify-end flex-1"
                >
                    <Footer />
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default App;