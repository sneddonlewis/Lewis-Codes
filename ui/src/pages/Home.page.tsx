import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';
import { Skills } from '../components/Skills';
import { About } from '../components/About';
import { ProjectList } from '../components/ProjectList';
import { Contact } from '../components/Contact';

const scrollSectionContainer: React.CSSProperties = {
  minHeight: '100vh',
  paddingTop: '6rem',
}

const navbarStyles = (scroll: boolean): React.CSSProperties => ({
  backgroundColor: scroll ? 'rgba(var(--primary-rgb), 0.5)' : 'rgba(var(--primary-rgb), 0.95)',
  transition: 'background-color 0.3s',
  backgroundImage: 'linear-gradient(to bottom, rgba(var(--primary-rgb), 0.7), rgba(var(--primary-rgb), 0))',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
})


const navBrandStyle= (scroll: boolean): React.CSSProperties => ({
  visibility: scroll ? 'visible' : 'hidden',
})

export const Home: React.FC = () => {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Container>
        <Navbar 
          id="sn-navbar"
          data-bs-theme="dark"
          variant="dark"
          fixed="top"
          className="navbar px-3 mb-3"
          style={navbarStyles(scroll)}>
          <Navbar.Brand href="#" style={navBrandStyle(scroll)} aria-label='scroll to top'>
            <FaArrowUp />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>

        <div
          data-bs-spy="scroll" 
          data-bs-target="#sn-navbar"
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true" 
          className="p-3 rounded-2"
          tabIndex={0}>

          <div style={scrollSectionContainer}>
            <About  />
          </div>

          <div id="skills" style={scrollSectionContainer}>
            <Skills />
          </div>

          <div id="projects" style={scrollSectionContainer}>
            <ProjectList />
          </div>

          <div id="contact" style={scrollSectionContainer}>
            <Contact />
          </div>

        </div> 
      </Container>
    </>
  )
}
