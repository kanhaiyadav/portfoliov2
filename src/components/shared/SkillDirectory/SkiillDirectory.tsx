import SkillCard from "../SkillCard/SkillCard";
import "./SkillDirectory.styles.css";
import { webDev, programmingLanguages, languages } from "../../../../constants/global";
import { useState } from "react";

const SkillDirectory = () => {
    const AllSkills = [webDev, programmingLanguages, languages];
    const [count, setCount] = useState(0);
    const skills = AllSkills[count % 3];
    return (
        <div className="flex-1 flex flex-col p-4 mt-[-80px]">
            <div className="flex mx-[50px]">
                <span
                    className={`p-4 cursor-default rounded-t-xl  ${
                        count === 0 ? "bg-primary/5 border border-b-none" : "border"
                    }`}
                    onClick={() => setCount(0)}
                >
                    Frameworks/Tools
                </span>
                <span
                    className={`p-4 cursor-default rounded-t-xl  ${
                        count === 1 ? "bg-primary/5 border border-b-none" : "border"
                    }`}
                    onClick={() => setCount(1)}
                >
                    Programming Languages
                </span>
                <span
                    className={`p-4 cursor-default rounded-t-xl  ${
                        count === 2 ? "bg-primary/5 border border-b-none" : "border"
                    }`}
                    onClick={() => setCount(2)}
                >
                    Spoken Languages
                </span>
            </div>

            <div className="h-full rounded-b-xl mx-[50px] p-10 bg-primary/5 border">
                <div className="skill-directory w-full flex justify-center items-start flex-wrap gap-8">
                    {skills.map((skill: {
                        imgPath?: string;
                        name?: string;
                        progress: number;
                        imgStyle?: { borderRadius: string; border: string };
                        documentation?: string;
                    }, index: number) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </div>
            {/* <div className="h-1 flex justify-between  gap-3">
                {AllSkills.map((skill, index) => (
                    <span
                        key={index}
                        className={`flex-1 cursor-pointer w-[10px] rounded-full ${
                            index == count % 3 ? "bg-[#c54d20]" : "bg-white"
                        }`}
                        onClick={() => setCount(index)}
                    ></span>
                ))}
            </div> */}
        </div>
    );
};

export default SkillDirectory;
