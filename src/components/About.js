import React from 'react';
import styled from 'styled-components';

const About = () => {
    return (
        <Section id = "about">
            <Container>
                <Title> About Me </Title>
                <Content>
                    <Image src="" alt="Arthy Umapathy"/>
                    <Text>
                        <p>
                            I am a passionate software developer with a focus on creating beautiful and functional web applications.
                            I love solving problems and bringing ideas to life through code.
                        </p>
                    </Text>
                </Content>
            </Container>
        </Section>
    )
};

const Section = styled.section`
    padding: 4rem 2rem;
    background: #112240;
`;

const Container = styled.div`
    max-width: 120px;
    margin: 0 auto;
`;

const Title = styled.h2`
    color: #64ffda;
    font-size: 2rem;
    margin-bottom: 2rem;
`;

const Content = styled.div`
    display: flex;
    gap: 2rem;
`;

const Image = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
`;

const Text = styled.div`
    color: #ccd6f6;
    font-size: 1rem;
`;

export default About;