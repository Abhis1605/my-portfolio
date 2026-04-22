"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import ProjectCard from "@/components/common/ProjectCard";
import { projectsData } from "@/data/projectsData";
import { fadeUp, staggerContainer } from "@/lib/animations";

const CATEGORIES = ["all", "frontend", "backend", "fullstack"];
const PROJECTS_PER_PAGE = 6;

const parsePage = (value) => {
  const page = Number(value);
  return Number.isInteger(page) && page > 0 ? page : 1;
};

export default function ProjectsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Read from URL
  const rawCategory = searchParams.get("category") || "all";
  const rawPage = searchParams.get("page") || "1";

  // Sanitize URL values
  const selectedCategory = CATEGORIES.includes(rawCategory) ? rawCategory : "all";
  const requestedPage = parsePage(rawPage);

  // Filter data
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projectsData;
    return projectsData.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));
  const currentPage = Math.min(requestedPage, totalPages);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    return filteredProjects.slice(start, start + PROJECTS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  // Keep URL canonical (remove invalid params automatically)
  useEffect(() => {
    const categoryChangedBySanitizer = rawCategory !== selectedCategory;
    const pageChangedBySanitizer = String(requestedPage) !== String(currentPage);

    if (!categoryChangedBySanitizer && !pageChangedBySanitizer) return;

    const params = new URLSearchParams(searchParams.toString());

    if (selectedCategory === "all") params.delete("category");
    else params.set("category", selectedCategory);

    if (currentPage === 1) params.delete("page");
    else params.set("page", String(currentPage));

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [
    rawCategory,
    selectedCategory,
    requestedPage,
    currentPage,
    pathname,
    router,
    searchParams,
  ]);

  const updateURL = ({ category, page }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!category || category === "all") params.delete("category");
    else params.set("category", category);

    if (!page || page === 1) params.delete("page");
    else params.set("page", String(page));

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const handleCategoryChange = (category) => {
    // Reset page when changing category
    updateURL({ category, page: 1 });
  };

  const handlePrev = () => {
    updateURL({ category: selectedCategory, page: Math.max(1, currentPage - 1) });
  };

  const handleNext = () => {
    updateURL({ category: selectedCategory, page: Math.min(totalPages, currentPage + 1) });
  };

  return (
    <section className="min-h-screen pt-28 pb-16 bg-linear-to-br from-black via-accent-muted to-black">
      <div className="px-[8%] lg:px-[5%]">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between mb-8"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl tracking-widest mb-4 lg:mb-0"
          >
            Projects
          </motion.h1>

          <motion.p variants={fadeUp} className="text-center text-base text-muted font-semibold">
            Browse all projects by category and share filtered URLs.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`uppercase text-xs tracking-widest border px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-white border-accent"
                    : "border-border text-muted hover:text-white hover:border-accent"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {paginatedProjects.length === 0 ? (
          <p className="text-muted text-center py-12">No projects found in this category.</p>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:p-4 gap-8 lg:gap-10"
          >
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="border border-border px-4 py-2 text-sm disabled:opacity-40 hover:border-accent transition-all"
          >
            Prev
          </button>

          <p className="text-sm text-muted">
            Page {currentPage} of {totalPages}
          </p>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="border border-border px-4 py-2 text-sm disabled:opacity-40 hover:border-accent transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}