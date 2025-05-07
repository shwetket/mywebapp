import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weather",
      path: "/weather",
      description: "Real-time weather forecasting application"
    },
    {
      id: 2,
      title: "Counter",
      path: "/counter",
      description: "Interactive counter with state management"
    },
    {
      id: 3,
      title: "Todo",
      path: "/todo",
      description: "Task management application"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      {/* Header Section */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-[var(--text-primary)] text-center mb-6">
          Projects
        </h1>
        <div className="w-24 h-1 bg-[var(--accent-color)] mx-auto mb-8"></div>
        <p className="text-xl text-[var(--text-primary)] text-center max-w-2xl mx-auto">
          Here are some of my projects that showcase my skills and experience
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl px-4">
        {projects.map((project) => (
          <a 
            key={project.id}
            href={project.path}
            className="rounded-xl border border-[var(--border-color)] bg-[var(--card-background-color)] dark:bg-[var(--dark-card-background-color)] 
                       shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                       overflow-hidden group relative h-64"
          >
            <div className="h-full flex flex-col justify-center items-center p-8 relative">
              <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">{project.title}</h2>
              <p className="text-[var(--text-secondary)] text-center opacity-80">{project.description}</p>
              
              {/* Arrow icon with improved positioning and transition */}
              <span 
                className="absolute bottom-4 right-4 font-semibold text-xl text-[var(--accent-color)] 
                           transform group-hover:translate-x-1 group-hover:-translate-y-1 
                           transition-transform duration-300" 
                aria-label="External link"
              >
                &#8599;
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}