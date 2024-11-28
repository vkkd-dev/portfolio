import { Projects } from "@/types/Projects";
import Image from "next/image";

const ProjectsCard = ({ project }: { project: Projects }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/images/project-bg.png"
        width={400}
        height={400}
        alt="service"
        className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] -z-10 blur-md"
      />
      <div className="backdrop-blur-sm bg-white/0 border-2 border-white shadow-lg flex flex-col justify-evenly m-5 p-5 rounded-3xl">
        <Image src={project.img} width={330} height={330} alt={project.title} />
        <h2 className="text-contentSecondary font-medium mt-3 mb-1">
          {project.title}
        </h2>
        <h2 className="text-lg font-semibold">{project.type}</h2>
      </div>
      <Image
        src={project.stackImg}
        width={75}
        height={75}
        alt={project.title}
      />
    </div>
  );
};

export default ProjectsCard;
