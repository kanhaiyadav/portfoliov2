import { scrollToSection } from "@/lib/utils";

interface ProjectType {
    path: string;
    imgPath: string;
    title: string;
    description: string;
    preview?: string;
    source: string;
    timeSpan: string;
    technologies: number[];
    youtube?: string;
}

const ProjectCard = ({
    project,
    setProject,
    active,
    setActiveIndex,
}: {
    project: ProjectType;
    setProject: React.Dispatch<React.SetStateAction<ProjectType>>;
    active: boolean;
    setActiveIndex: (project: string) => void;
}) => {
    return (
        <div
            className={`h-[80px] sm:h-[100px] xl:h-[120px] 2xl:h-[150px]  aspect-[16/9] bg-cover bg-center rounded-lg hover:ring-2 ring-primary/60 cursor-pointer ${
                active ? "ring-2 ring-primary" : ""
            }`}
            style={{
                backgroundImage: `url(${project.path})`,
            }}
            onClick={() => {
                                        scrollToSection("project-details");
                scrollToSection("project-details");
                setProject(project);
                setActiveIndex(project.title);
            }}
        >
            <div className="h-full w-full flex flex-col justify-end p-2 md:p-4 gap-2 rounded-lg bg-gradient-to-t from-black to-transparent">
                <div className="flex-between gap-2 w-fit">
                    <img
                        src={`/${project.imgPath}`}
                        alt="project icon"
                        className="w-[25px] sm:w-[30px] lg:w-[40px]"
                    />
                    <h2 className="text-md sm:text-lg lg:text-xl text-white whitespace-nowrap max-w-[100px] text-ellipsis overflow-hidden">
                        {project.title}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
