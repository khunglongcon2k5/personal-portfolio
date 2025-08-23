import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [
  // Frontend
  { name: "HTML5", icon: "devicon-html5-plain colored", category: "Frontend" },
  { name: "CSS3", icon: "devicon-css3-plain colored", category: "Frontend" },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
    category: "Frontend",
  },
  {
    name: "React",
    icon: "devicon-react-original colored",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain colored",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-original colored",
    category: "Frontend",
  },
  {
    name: "Sass",
    icon: "devicon-sass-original colored",
    category: "Frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain colored",
    category: "Backend",
  },
  {
    name: "PHP",
    icon: "devicon-php-plain colored",
    category: "Backend",
  },

  // Tools
  { name: "Git", icon: "devicon-git-plain colored", category: "Tools" },
  {
    name: "GitHub",
    icon: "devicon-github-original",
    category: "Tools",
  },
  { name: "VS Code", icon: "devicon-vscode-plain colored", category: "Tools" },

  // Database
  {
    name: "MySQL",
    icon: "devicon-mysql-original colored",
    category: "Database",
  },
  {
    name: "SQL Server",
    icon: "devicon-microsoftsqlserver-plain-wordmark colored",
    category: "Database",
  },
];

const categories = ["All", "Frontend", "Backend", "Tools", "Database"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.16.0/devicon.min.css"
      />
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize  hover:cursor-pointer",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bd-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
              <div
                key={key}
                className="p-6 rounded-xl duration-300 hover:-translate-y-1 flex flex-col items-center text-center group hover:cursor-pointer"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <i className={`${skill.icon} text-5xl`}></i>
                </div>

                <h3 className="font-semibold text-sm text-foreground ">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
