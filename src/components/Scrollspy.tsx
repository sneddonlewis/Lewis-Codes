import { Container, Nav, Navbar } from "react-bootstrap"
import { About } from "./About"
import { Certifications } from "./Certifications"
import { ProjectList } from "./ProjectList"
import { Skills } from "./Skills"
import { useEffect, useState } from "react"
import { Contact } from "./Contact"

export const Scrollspy = () => {
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

  const navbarStyles = {
    backgroundColor: scroll ? 'rgba(112, 44, 249, 0.5)' : 'rgba(112, 44, 249, 0.95)',
    transition: 'background-color 0.3s',
    backgroundImage: 'linear-gradient(to bottom, rgba(112, 44, 249, 0.7), rgba(112, 44, 249, 0))',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  }

  const scrollSectionStyles = {
    marginBottom: '6rem'
  }

  return (
    <>
      <Container>
        <Navbar 
          id="sn-navbar"
          data-bs-theme="dark"
          variant="dark"
          fixed="top"
          className="navbar px-3 mb-3"
          style={navbarStyles}>
          <Navbar.Brand href="#">Lewis Sneddon</Navbar.Brand>
            <Nav className="ms-auto">
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

          <div style={scrollSectionStyles}></div>
          <About  />

          <div style={scrollSectionStyles}></div>
          <Skills />
          <Certifications />


          <div id="projects" style={scrollSectionStyles}></div>
          <ProjectList />

          <div id="contact" style={scrollSectionStyles}></div>
          <Contact />

        </div> 
      </Container>
    </>
  )
}
