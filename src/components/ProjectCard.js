import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="transform transition-transform duration-300 hover:scale-105 border rounded-lg overflow-hidden shadow-lg">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <a href={project.link} className="text-blue-500 hover:underline">
          View Details
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
