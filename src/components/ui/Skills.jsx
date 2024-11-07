import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <div
      role="list"
      aria-labelledby="skills-heading"
      className="flex flex-wrap gap-4 my-6"
    >
      {skills.map((skill, index) => (
        <div
          key={index}
          role="listitem"
          aria-label={`Skills: ${skill.label}`}
          className="flex items-center gap-2 hover:animate-bounceOnce"
        >
          <skill.icon size={30} />
          <span>{skill.label}</span>
        </div>
      ))}
    </div>
  );
}
