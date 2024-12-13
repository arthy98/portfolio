import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Section>
            <p>&copy; {new Date().getFullYear()} MyPortfolio. All right reserved.</p>
        </Section>
    );
};

const Section = styled.footer`
    text-align: center;
    padding: 1rem;
    background: #112240;
    color: #8892b0;
`;

export default Footer;