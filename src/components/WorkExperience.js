import React from 'react';
import styled from 'styled-components';

const experiences = [
  {
    role: 'Software Developer Engineer - I',
    company: 'Amazon',
    duration: 'October 2024 - Present',
    description: [
      'Developed a full-stack web application using React and Node.js.',
      'Improved API performance by 20% through code optimization.',
      'Collaborated with cross-functional teams to deliver projects on time.',
    ],
  },
  {
    role: 'Software Developer Engineer - II',
    company: 'Creative Studio',
    duration: 'April 2022 - September 2024',
    description: [
      'Built and maintained responsive websites for clients.',
      'Enhanced SEO strategies to improve client website traffic by 30%.',
      'Integrated third-party APIs to add new features.',
    ],
  },
];
const WorkExperience = () => {
  return (
    <Section id="work-experience">
      <Container>
        <Title>Work Experience</Title>
        <Timeline>
          {experiences.map((exp, index) => (
            <Job key={index}>
              <Role>{exp.role}</Role>
              <Company>{exp.company}</Company>
              <Duration>{exp.duration}</Duration>
              <Description>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </Description>
            </Job>
          ))}
        </Timeline>
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
  text-align: center;
`;
const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Job = styled.div`
  background: #112240;
  padding: 1.5rem;
  border-radius: 8px;
  color: #ccd6f6;
`;
const Role = styled.h3`
  color: #64ffda;
  margin-bottom: 0.5rem;
`;
const Company = styled.h4`
  color: #8892b0;
  margin-bottom: 0.5rem;
`;
const Duration = styled.p`
  font-size: 0.9rem;
  color: #8892b0;
  margin-bottom: 1rem;
`;
const Description = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  li {
    margin-bottom: 0.5rem;
    color: #ccd6f6;
  }
`;
export default WorkExperience;
