import ComponentTitle from "@/components/ComponentTitle";
import ProjectsCard from "@/components/ProjectsCard";
import { Project } from "@/types/Projects";
import { projects_data } from "../../../../../public/data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center py-10"
    >
      <ComponentTitle title="Projects" />
      <div className="flex flex-col lg:grid grid-cols-3 gap-6 lg:gap-0 lg:max-w-5xl">
        {projects_data.map((project: Project) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
