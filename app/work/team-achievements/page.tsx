import WorkCarousel from "@/components/work/WorkCarousel";
import ProjectCard from "@/components/work/ProjectCard";
import { achievementProjects } from "@/constants/work";

const TeamAchievements = () => (
  <WorkCarousel
    title="Achievements"
    description="Milestones, metrics, and moments that define who we are as a team."
  >
    {achievementProjects.map((project) => (
      <div key={project.name} className="w-80 shrink-0">
        <ProjectCard {...project} />
      </div>
    ))}
  </WorkCarousel>
);

export default TeamAchievements;
