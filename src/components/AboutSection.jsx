import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mv-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="mt-12 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              I'm Hung, a web development student who is passionate about
              creating modern and user-friendly websites. I enjoy exploring new
              technologies and continuously improving my skills to build better
              and more efficient web applications.
            </p>

            <p className="text-muted-foreground">
              I enjoy learning new technologies and improving my coding skills
              every day. My goal is to become a full-stack developer, and I'm
              constantly working on personal projects to strengthen both my
              frontend and backend abilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
