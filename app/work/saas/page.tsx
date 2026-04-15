import WorkCarousel from "@/components/work/WorkCarousel";
import ProjectCard from "@/components/work/ProjectCard";
import { saasProjects } from "@/constants/work";

const Saas = () => (
  <WorkCarousel
    title="SaaS"
    description="Scalable software products we've built that solve real problems for real businesses."
  >
    {saasProjects.map((project) => (
      <div key={project.name} className="w-80 shrink-0">
        <ProjectCard {...project} />
      </div>
    ))}
  </WorkCarousel>
);

export default Saas;
