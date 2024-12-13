import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Details = () => {
    return (
        <Section id = "hero">
            <Intro
                initial = {{ opacity: 0}}
                animate = {{ opacity: 1}}
                transition = {{ duration: 1}}
            >
                <h1>Hello, I am <span> Arthy Umapathy</span></h1>
                <p>Software Developer Engineer</p>
            </Intro>
        </Section>
    );
};

const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0a192f;
`;

const Intro = styled(motion.div)`
    text-align: center;
    h1 {
        color: #ccd6f6;
        span {
            color: #64ffda;
        }
    }
    p {
        color: #8892b0;
        font-size: 1.2rem;
    }
`;

export default Details;