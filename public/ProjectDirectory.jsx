import ProjectCard from "../ProjectCard/ProjectCard";
import './project-directory.css';
import { RiPlaneLine } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { web, python} from "./ProjectData";

const WarningMessage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
                // else {
                //     setIsVisible(false);
                // }
            },
            {
                threshold: 1,
            }
        );
        const current = divRef.current;
        if (divRef.current) {
            observer.observe(divRef.current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);
    return (
        <div className="inline-block">
            <i ref={divRef} className={`${isVisible ? 'animate-typewriter5' : ''} animate-typewriter1 text-white overflow-hidden inline-block h-[120px] sm:h-[70px] md:h-[50px] xl:h-5`}>Okay, please don&apos;t laugh too hard 😅, these are some basic Python projects I whipped up when I first learned to code 🐍. Think of them as my programming training wheels 🚲!</i>
        </div>
    )
};

const ProjectDirectory = ({ data, className, ...otherProps }) => {
    const [count, setCount] = useState(0);
    const allProjects = [web, python];
    data = allProjects[count % allProjects.length]
    const { projects } = data;
    return (
        <>
            <div className="flex gap-5">
                <h1 className="text-3xl font-Playwrite1 md:text-4xl text-[#c54d20]">{data.name}</h1>
                <span className="h-8 w-8 text-white hover:scale-110 hover:bg-white hover:text-black transition duration-300 active:scale-90 shadow-[0px_0px_5px_2px_rgba(0,0,0,0.5)] rounded-full p-2 box-content"
                    onClick={() => setCount((prev) => {
                        return prev + 1;
                    })}
                >
                    <FaAngleDoubleDown className="w-full h-full" />
                </span>
            </div>
            {
                data.name === "python" ? <WarningMessage /> : null
            }
            <div className={`relative project-directory xl:w-full pr-20 xl:pr-0 ${className}`} {...otherProps}>
                <div id="timeline" className="absolute top-[210px] bottom-[180px] md:top-[130px] md:bottom-[130px] left-[90%] sm:left-[96%] xl:left-[50%] xl:translate-x-[-50%]">
                    <div className="absolute top-0 bottom-0 flex flex-col justify-between">
                        {
                            projects.map((project, index) => (
                                <div key={index} className="timeline-dot w-5 h-5 rounded-full bg-[#fe6263]"></div>
                            ))
                        }
                    </div>
                    <div id="airplane" className="sticky top-[300px] w-10"><RiPlaneLine className="rotate-180 w-full text-5xl text-white ml-[1px]" /></div>
                </div>
                {
                    projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                }
            </div>
            <div className="h-1 flex justify-between  gap-3">
                {
                    allProjects.map((skill, index) => (
                        <span key={index} className={`flex-1 cursor-pointer w-[10px] rounded-full ${index == count % 3 ? 'bg-[#c54d20]' : 'bg-white'}`}
                            onClick={() => setCount(index)}
                        ></span>
                    ))
                }
            </div>
        </>
    )
};

export default ProjectDirectory;