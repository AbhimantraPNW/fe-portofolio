"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/Leetcode.PNG",
    category: "Javascript",
    name: "Leetcode",
    description:
      "Lorem ipsum dolar sit amet constectur adipiscing elit. Cumque, quiz",
    link: "https://leetcode.com/Abhimantra_PNW/",
    github: "/",
  },
  {
    image: "/work/web-cv.PNG",
    category: "React JS",
    name: "Web CV",
    description:
      "Lorem ipsum dolar sit amet constectur adipiscing elit. Cumque, quiz",
    link: "/",
    github: "/",
  },
  {
    image: "/work/todo-list.PNG",
    category: "Tailwind",
    name: "Todo-List App",
    description:
      "Lorem ipsum dolar sit amet constectur adipiscing elit. Cumque, quiz",
    link: "/",
    github: "/",
  },
];

// remove category duplication
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

console.log(uniqueCategories);
const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    //if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
          mb-12 mx-auto md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
