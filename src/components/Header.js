import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-scroll';

const Header = () => {
    return (
        <Nav>
            <Logo>MyPortfolio</Logo>
            <Menu>
                <MenuItem><Link to="details" smooth>Home</Link></MenuItem>
                <MenuItem><Link to="about" smooth>About</Link></MenuItem>
                <MenuItem><Link to="projects" smooth>Projects</Link></MenuItem>
                <MenuItem><Link to="contact" smooth>Contact</Link></MenuItem>
            </Menu>
        </Nav>
    );
};

const Nav = styled.nav`
    position: sticky;
    top: 0;
    background: #0a192f;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
`;

const Logo = styled.h1`
    color: #64ffda;
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;
`;

const MenuItem = styled.li`
    margin-left: 2rem;
    a {
        color: #ccd6f6;
        text-decoration: none;
        &:hover {
            color: #64ffda;
        }
    }
`;

export default Header;