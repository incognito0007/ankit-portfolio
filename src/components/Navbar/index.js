/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  LinkedInButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink
} from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        {/* Logo */}
        <NavLogo to='/'>
          <div style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Ankit Anand</Span>
          </div>
        </NavLogo>

        {/* Mobile Hamburger */}
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>

        {/* Desktop Menu */}
        <NavItems>
          <NavLink as={Link}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            About
          </NavLink>
          <NavLink as={Link}
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            Experience
          </NavLink>
          <NavLink as={Link}
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            Projects
          </NavLink>
          <NavLink as={Link}
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            Skills
          </NavLink>
        </NavItems>

        {/* Buttons */}
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          <LinkedInButton href={Bio.linkedin} target="_blank" style={{ marginLeft: '16px' }}>
            LinkedIn Profile
          </LinkedInButton>
        </ButtonContainer>

        {/* Mobile Menu */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink as={Link}
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="active"
              onClick={() => setIsOpen(false)}
            >
              About
            </MobileLink>
            <MobileLink as={Link}
              to="experience"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="active"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </MobileLink>
            <MobileLink as={Link}
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="active"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </MobileLink>
            <MobileLink as={Link}
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="active"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </MobileLink>

            {/* Close button */}
            <CloseRounded
              style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}
              onClick={() => setIsOpen(false)}
            />

            {/* Github Button in Mobile Menu */}
            <GitHubButton
              style={{
                padding: '10px 16px',
                background: `${theme.primary}`,
                color: 'white',
                width: 'max-content'
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar