import React, { useState } from 'react';
import styled from 'styled-components';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <Section id="contact">
      <Container>
        <Title>Contact Me</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></Textarea>
          <Button type="submit">Send Message</Button>
        </Form>
      </Container>
    </Section>
  );
};
const Section = styled.section`
  padding: 4rem 2rem;
  background: #0a192f;
`;
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
const Title = styled.h2`
  color: #64ffda;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #64ffda;
  border-radius: 4px;
  background: #112240;
  color: #ccd6f6;
`;
const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #64ffda;
  border-radius: 4px;
  background: #112240;
  color: #ccd6f6;
  resize: none;
`;
const Button = styled.button`
  padding: 0.75rem;
  background: #64ffda;
  border: none;
  border-radius: 4px;
  color: #0a192f;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #52e0c4;
  }
`;
export default Contact;
