import ComponentTitle from "@/components/ComponentTitle";
import ProjectsCard from "@/components/ProjectsCard";
import { Projects } from "@/types/Projects";
import { projects_data } from "../../../../../public/data/projects";

const HomeProjects = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-10">
      <ComponentTitle title="Projects" />
      <div className="flex flex-col gap-6">
        {projects_data.map((project: Projects) => (
          <ProjectsCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
