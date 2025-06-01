"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title and Description - Always First */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            {t("title")}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-8 order-2 md:order-1">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="card p-4 text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-text-secondary">{t("stats.projects")}</div>
              </div>
              <div className="card p-4 text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-text-secondary">
                  {t("stats.experience")}
                </div>
              </div>
              <div className="card p-4 text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-text-secondary">
                  {t("stats.technologies")}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {t("languages.title")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="card p-4">
                  <div className="font-medium text-text-primary">
                    {t("languages.portuguese")}
                  </div>
                  <div className="text-text-secondary">
                    {t("languages.native")}
                  </div>
                </div>
                <div className="card p-4">
                  <div className="font-medium text-text-primary">
                    {t("languages.english")}
                  </div>
                  <div className="text-text-secondary">
                    {t("languages.fluent")}
                  </div>
                </div>
                <div className="card p-4">
                  <div className="font-medium text-text-primary">
                    {t("languages.french")}
                  </div>
                  <div className="text-text-secondary">
                    {t("languages.fluent")}
                  </div>
                </div>
                <div className="card p-4">
                  <div className="font-medium text-text-primary">
                    {t("languages.spanish")}
                  </div>
                  <div className="text-text-secondary">
                    {t("languages.intermediate")}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {t("education.title")}
              </h3>
              <div className="card p-4 mb-4">
                <div className="font-medium text-text-primary">
                  {t("education.degree4")}
                </div>
                <div className="text-text-secondary">
                  {t("education.university2")}
                </div>
              </div>
              <div className="card p-4 mb-4 ">
                <div className="font-medium text-text-primary">
                  {t("education.degree3")}
                </div>
                <div className="text-text-secondary">
                  {t("education.university2")}
                </div>
              </div>
              <div className="card p-4 mb-4 ">
                <div className="font-medium text-text-primary">
                  {t("education.degree2")}
                </div>
                <div className="text-text-secondary">
                  {t("education.university2")}
                </div>
              </div>
              <div className="card p-4 mb-4">
                <div className="font-medium text-text-primary">
                  {t("education.degree")}
                </div>
                <div className="text-text-secondary">
                  {t("education.university")}
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {t("tools.title")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {t("tools.list")
                  .split(",")
                  .map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-surface-hover text-text-primary rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full order-1 md:order-2">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <Image
                src="/profile-picture.jpg"
                alt={t("imageAlt")}
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
