import SkillDirectory from "../SkillDirectory/SkiillDirectory";
import SectionHeading from "../SectionHeading";

const Skills = () => {

    return (
        <section
            id="skills" className="w-full h-dvh px-[15px] sm:px-[20px] lg:px-[50px] xl:px-[100px] flex flex-col gap-4 py-4">
            <SectionHeading position="right">
                {`███████╗ ██╗  ██╗ ██╗ ██╗      ██╗      ███████╗
██╔════╝ ██║ ██╔╝ ██║ ██║      ██║      ██╔════╝
███████╗ █████╔╝  ██║ ██║      ██║      ███████╗
╚════██║ ██╔═██╗  ██║ ██║      ██║      ╚════██║
███████║ ██║  ██╗ ██║ ███████╗ ███████╗ ███████║
╚══════╝ ╚═╝  ╚═╝ ╚═╝ ╚══════╝ ╚══════╝ ╚══════╝
`}
            </SectionHeading>
            <SkillDirectory />
        </section>
    );
};

export default Skills;
