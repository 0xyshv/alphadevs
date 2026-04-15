import WorkCarousel from "@/components/work/WorkCarousel";
import ProjectCard from "@/components/work/ProjectCard";
import { web3Projects } from "@/constants/work";

const Web3 = () => (
  <WorkCarousel
    title="Web3"
    description="Decentralized applications and protocols we've shipped on-chain for the open web."
  >
    {web3Projects.map((project) => (
      <div key={project.name} className="w-80 shrink-0">
        <ProjectCard {...project} />
      </div>
    ))}
  </WorkCarousel>
);

export default Web3;
