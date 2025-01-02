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
    setProject: (project: ProjectType) => void;
    active: boolean;
    setActiveIndex: (project: string) => void;
}) => {
    return (
        <div
            className={`h-[150px] aspect-[16/9] bg-cover bg-center rounded-lg hover:ring-2 ring-primary/60 cursor-pointer ${
                active ? "ring-2 ring-primary" : ""
            }`}
            style={{
                backgroundImage: `url(${project.path})`,
            }}
            onClick={() => {
                setProject(project);
                setActiveIndex(project.title);
            }}
        >
            <div className="dark:bg-black/60 bg-black/40 hover:bg-black/40 h-full w-full flex flex-col justify-end p-4 gap-2 rounded-lg">
                <div className="flex-between gap-2 w-fit">
                    <img
                        src={`/${project.imgPath}`}
                        alt="project icon"
                        className="w-[40px]"
                    />
                    <h2 className=" text-xl text-white">{project.title}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
