import React from 'react';
import styled from 'styled-components';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of the project.',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'A brief description of the project.',
    link: '#',
  },
];
const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <Title>Projects</Title>
        <Grid>
          {projects.map((project, index) => (
            <Card key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
const Section = styled.section`
  padding: 4rem 2rem;
  background: #0a192f;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Title = styled.h2`
  color: #64ffda;
  font-size: 2rem;
  margin-bottom: 2rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;
const Card = styled.div`
  background: #112240;
  padding: 1.5rem;
  border-radius: 8px;
  color: #ccd6f6;
  h3 {
    color: #64ffda;
    margin-bottom: 1rem;
  }
  a {
    color: #64ffda;
    text-decoration: none;
  }
`;
export default Projects;
