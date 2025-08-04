import { motion } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { projects, technologies } from "../../../constants/global";
import Title from "./Title";
import { Badge } from "../ui/badge";

const AIFeaturesSection = () => {
    const sectionRef = useRef(null);


    return (
        <section
            className="min-h-[200vh] md:min-h-auto py-16 md:py-8 overflow-x-hidden"
            ref={sectionRef}
        >
            <SectionHeading>
                {`                ██████╗  ██████╗   ██████╗       ██╗ ███████╗  ██████╗ ████████╗ ███████╗
                ██╔══██╗ ██╔══██╗ ██╔═══██╗      ██║ ██╔════╝ ██╔════╝ ╚══██╔══╝ ██╔════╝
                ██████╔╝ ██████╔╝ ██║   ██║      ██║ █████╗   ██║         ██║    ███████╗
                ██╔═══╝  ██╔══██╗ ██║   ██║ ██   ██║ ██╔══╝   ██║         ██║    ╚════██║
                ██║      ██║  ██║ ╚██████╔╝ ╚█████╔╝ ███████╗ ╚██████╗    ██║    ███████║
                ╚═╝      ╚═╝  ╚═╝  ╚═════╝   ╚════╝  ╚══════╝  ╚═════╝    ╚═╝    ╚══════╝
            `}
            </SectionHeading>
            <div className="max-w-[1400px] mx-auto px-0 md:px-8 flex flex-col">

                {projects.slice(0, 5).map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.70 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{
                            once: false, 
                            amount: 0.3
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: index * 0.1
                        }}
                        className={`order-2 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-6 md:gap-[72px] lg:gap-[72px] p-8 md:px-4 lg:px-0 md:py-8 pb-4 md:pb-[100px] lg:pb-[250px] overflow-x-auto md:overflow-x-visible scroll-smooth scrollbar-none w-full pr-0 md:pr-8 lg:pr-0`}
                    >
                        <div className="px-4 md:px-0 w-full flex flex-col justify-center items-center mt-[50px]">
                            <div className={"relative w-auto min-w-[400px] max-w-[500px] lg:max-w-[603px] aspect-[700/402] rounded-2xl overflow-hidden mx-auto lg:mx-0"}>
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className={`w-full h-full object-cover rounded-2xl transition-opacity duration-500 ease-in-out`}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-4 lg:gap-4 p-0 md:p-8 lg:p-8 rounded-2xl transition-all duration-300 justify-center bg-white/5 md:bg-transparent border border-white/10 md:border-0 backdrop-blur-[10px] md:backdrop-blur-0 snap-start mr-4 md:mr-0 last:mr-4 md:last:mr-0 max-w-[700px]">
                            <div className="mb-2 flex gap-4 items-center">
                                <img
                                    src={project.icon}
                                    alt="ai icon"
                                    className="w-6 h-6 md:w-12 md:h-12"
                                />
                                <Title title={project.title} />
                            </div>
                            <p className="text-[0.9rem] md:text-[15px] lg:text-2xl m-0 max-w-full md:max-w-[90%]">
                                {project.description}
                            </p>
                            <div className="flex flex-col gap-1">
                                <p className="text-2xl">
                                    <span>Live Demo: </span>
                                    <a href={project.preview} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        {project.preview}
                                    </a>
                                </p>
                                <p className="text-2xl">
                                    <span>Source Code: </span>
                                    <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        {project.source}
                                    </a>
                                </p>
                                <p className="text-2xl">
                                    <span>Video Preview: </span>
                                    <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        {project.youtube}
                                    </a>
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {
                                    project.technologies.map((tech, index) => (
                                        <Badge key={index} className="text-sm">
                                            {technologies[tech]?.name}
                                        </Badge>
                                    ))
                                }
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AIFeaturesSection;