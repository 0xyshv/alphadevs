import WorkCarousel from "@/components/work/WorkCarousel";
import ProjectCard from "@/components/work/ProjectCard";
import { achievementProjects } from "@/constants/work";

const TeamAchievements = () => (
  <WorkCarousel
    title="Achievements"
    description="Milestones, metrics, and moments that define who we are as a team."
  >
    {achievementProjects.map((project) => (
      <div key={project.name} className="w-full md:w-80 md:shrink-0 md:h-full">
        <ProjectCard {...project} />
      </div>
    ))}
  </WorkCarousel>
);

export default TeamAchievements;
