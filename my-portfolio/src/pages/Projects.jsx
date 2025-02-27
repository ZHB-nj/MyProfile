import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
`;


const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 800px;
  width: 100%;
  margin-top: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
`;

const ProjectCard = styled.a`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  color: #2563eb;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const projects = [
  { name: "🎮 Play Snake Game", link: "/games/snake/index.html" },
  { name: "🛠 Add Later", link: "#" },
  { name: "🛠 Add Later", link: "#" },
];

function Projects() {
  return (
    <ProjectsContainer>
      <Title>My Projects</Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} href={project.link} target={project.link !== "#" ? "_blank" : ""}>
            {project.name}
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
}

export default Projects;
