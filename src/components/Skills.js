import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';


const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
];
const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <Title>Skills</Title>
        <Icons>
          {skills.map((skill, index) => (
            <Icon key={index}>
              {skill.icon}
              <p>{skill.name}</p>
            </Icon>
          ))}
        </Icons>
      </Container>
    </Section>
  );
};
const Section = styled.section`
  padding: 4rem 2rem;
  background: #112240;
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
const Icons = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;
const Icon = styled.div`
  text-align: center;
  color: #ccd6f6;
  font-size: 2rem;
  p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;
export default Skills;