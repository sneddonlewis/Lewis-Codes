import { Container, Navbar } from "react-bootstrap"
import About from "./About"
import Certifications from "./Certifications"
import Projects from "./Projects"
import Skills from "./Skills"

export const Scrollspy = () => {
  return (
    <>
      <Container>
        <Navbar id='sn-navbar' className='navbar fixed-top px-3 mb-3'>
          {/* <nav id="sn-navbar" className={`navbar fixed-top px-3 mb-3`}> */}
          <a className="navbar-brand" href="#">Lewis Sneddon</a>
          <ul className={`nav nav-pills`}>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='#projects'>Projects</a>
            </li>
          </ul>
          {/* </nav> */}
        </Navbar>

        <div
          data-bs-spy="scroll" 
          data-bs-target='#sn-navbar'
          data-bs-root-margin="0px 0px -40%"
          data-bs-smooth-scroll="true" 
          className={`p-3 rounded-2`}
          tabindex='0'>
          <h4>About</h4>
          <About  />

          <h4 id='skills'>Skills</h4>
          <Skills />
          <Certifications />

          <h4 id='projects'>Projects</h4>
          <Projects />
        </div> 
      </Container>
    </>
  )
}
