/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, LinkedInButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Ankit Anand</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          <LinkedInButton href={Bio.linkedin} target="_blank" style={{marginLeft: '16px'}}>LinkedIn Profile</LinkedInButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <CloseRounded style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={() => {
              setIsOpen(!isOpen)
            }} />
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar