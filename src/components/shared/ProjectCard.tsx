interface ProjectType {
    path: string;
    imgPath: string;
    title: string;
    description: string;
    preview?: string;
    source: string;
    timeSpan: string;
    technologies: number[];
}

const ProjectCard = ({ project, setProject }: {
    project: ProjectType;
    setProject: (project: ProjectType) => void;
}) => {
  return (
      <div className="h-[150px] aspect-[16/9] bg-cover bg-center rounded-lg hover:ring-2 ring-primary/60 cursor-pointer"
            style={{
                backgroundImage: `url(${project.path})`,
          }}
            onClick={() => setProject(project)}
      >
          <div className="bg-black/60 hover:bg-black/40 h-full w-full flex flex-col justify-end p-4 gap-2 rounded-lg">
              <div className="flex-between gap-2 w-fit">
                  <img src={`/${project.imgPath}`} alt="project icon" className="w-[40px]" />
                  <h2 className=" text-xl">{project.title}</h2>
              </div>
          </div>
    </div>
  )
}

export default ProjectCard
