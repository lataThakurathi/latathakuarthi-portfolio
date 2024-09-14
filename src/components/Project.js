import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    image: "../../public/Project1.jpg",
    title: "Project 1",
    description:
      "A blog page is a platform for sharing articles or posts, featuring sections like a header with navigation.",
    link: "https://github.com/lataThakurathi/Blog",
  },
  {
    id: 2,
    image: "../../public/Project2.jpg",
    title: "Project 2",
    description:
      "A homepage serves as the main entry point of a website, offering an overview of key content and features through sections .",
    link: "https://github.com/lataThakurathi/edumy",
  },
  // Add more projects here
];

function Project() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Project;
