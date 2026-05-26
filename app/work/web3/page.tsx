import WorkCarousel from "@/components/work/WorkCarousel";
import ProjectCard from "@/components/work/ProjectCard";
import { web3Projects } from "@/constants/work";

const Web3 = () => (
  <WorkCarousel
    title="Web3"
    description="Decentralized applications and protocols we've shipped on-chain for the open web."
  >
    {web3Projects.map((project) => (
      <div key={project.name} className="w-full md:w-80 md:shrink-0 md:flex md:flex-col md:h-full">
        <ProjectCard {...project} />
      </div>
    ))}
  </WorkCarousel>
);

export default Web3;
