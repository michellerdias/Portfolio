"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      mockup: "/project-2.png",
      tags: t("projects.project1.tags").split(","),
      features: t("projects.project1.features").split(","),
    },
    {
      id: 2,
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      mockup: "/project-1.png",
      tags: t("projects.project2.tags").split(","),
      features: t("projects.project2.features").split(","),
    },
    {
      id: 3,
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      mockup: "/project-3.png",
      tags: t("projects.project3.tags").split(","),
      features: t("projects.project3.features").split(","),
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-text-primary mb-4">
          {t("title")}
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          {t("description")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.mockup}
                  alt={t("imageAlt", { title: project.title })}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-hover text-text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-background bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-surface rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src={selectedProject.mockup}
                  alt={t("imageAlt", { title: selectedProject.title })}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-text-primary">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-text-secondary hover:text-text-primary"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-text-secondary mb-6">
                  {selectedProject.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">
                    {t("features.title")}
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-text-secondary"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-hover text-text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
