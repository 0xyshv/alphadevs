import WorkCarousel from "@/components/work/WorkCarousel";
import ProjectCard from "@/components/work/ProjectCard";
import { aiAgentProjects } from "@/constants/work";

const AiAgents = () => (
  <WorkCarousel
    title="AI Agents"
    description="Autonomous systems we've built that think, decide, and act on behalf of our clients."
  >
    {aiAgentProjects.map((project) => (
      <div key={project.name} className="w-full md:w-80 md:shrink-0 md:flex md:flex-col md:h-full">
        <ProjectCard {...project} />
      </div>
    ))}
  </WorkCarousel>
);

export default AiAgents;
