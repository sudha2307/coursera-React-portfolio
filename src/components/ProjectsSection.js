import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Music player application",
    description:
      "An Music Player Application Created Using Python.",
    getImageSrc: () => require("../images/1_JepRP5z3cCK9AjoKAyxRwA.webp"),
  },
  {
    title: "Portfolio Website",
    description:
      "Personal Portfolio website using Html\css\js",
    getImageSrc: () => require("../images/hq720.jpg"),
  },
  {
    title: "E-Commerce website",
    description:
      "A stunning E commerce website Created using Html\css\js\react",
    getImageSrc: () => require("../images/loaf.jpg"),
  },
  {
    title: "To-Do List Application",
    description:
      "A mobile application To-Do List Using Advanced Java ",
    getImageSrc: () => require("../images/1f3f4ce973d946578567f190e2773709.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
