import WorkCarousel from "@/components/work/WorkCarousel";
import ProjectCard from "@/components/work/ProjectCard";
import { saasProjects } from "@/constants/work";

const Saas = () => (
  <WorkCarousel
    title="SaaS"
    description="Scalable software products we've built that solve real problems for real businesses."
  >
    {saasProjects.map((project) => (
      <div key={project.name} className="w-full md:w-80 md:shrink-0 md:flex md:flex-col md:h-full">
        <ProjectCard {...project} />
      </div>
    ))}
  </WorkCarousel>
);

export default Saas;
