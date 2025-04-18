export interface Project {
  title: string;
  projectType: string;
  skills: string[];
  description: string;
  images: string[];
  projectUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Project 1",
    projectType: "Web Application",
    skills: ["React", "Next.js", "TypeScript"],
    description: "A modern web application built with React and Next.js, featuring a responsive design and interactive user interface.",
    images: ["/assets/images/project1.png"],
    projectUrl: "/portfolio/project1"
  },
  {
    title: "Project 2",
    projectType: "Mobile App",
    skills: ["React Native", "Firebase"],
    description: "A cross-platform mobile application that helps users track their daily activities and set personal goals.",
    images: ["/assets/images/project2.png"],
    projectUrl: "/portfolio/project2"
  },
  {
    title: "Project 3",
    projectType: "Backend Service",
    skills: ["Node.js", "Express", "MongoDB"],
    description: "A robust backend service that handles complex data processing and provides RESTful APIs for client applications.",
    images: ["/assets/images/project3.png"],
    projectUrl: "/portfolio/project3"
  }
]; 