"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/profile-picture.jpg"
              alt="Michelle's profile picture"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 max-w-6xl">
            <h1 className="text-4xl md:text-3xl font-bold text-text-primary">
              {t("greeting")}
            </h1>
            <h2 className="text-4xl md:text-7xl text-text-secondary font-medium">
              {t("title")}
              <br />
              {t("location")}
            </h2>

            <p className="text-text-secondary text-lg md:text-xl max-w-4xl">
              {t("description")}
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <a href="#projects" className="btn btn-primary">
                {t("cta.viewWork")}
              </a>
              <a
                href="#contact"
                className="btn border border-border text-text-primary hover:bg-surface-hover"
              >
                {t("cta.contact")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
