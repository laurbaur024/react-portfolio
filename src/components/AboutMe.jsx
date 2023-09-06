
import React from "react"
import { MDBContainer } from "mdbreact"
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function AboutMe () {
  const img = {
    width: '400px',
    height: '400px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '20px',

  }

  const borders = {
    borderStyle: 'double',
    marginLeft: '10px',
    marginRight: '10px',
    borderColor: '#273043',
    borderRadius: '20px',
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: '#EFF6EE'
  }

  const container = {
    marginTop: '10px',
    textAlign: 'center',
    marginBottom: '50px',
    fontFamily: 'helvetica'
  }

  const bold = {
    fontWeight: 'bold'
  }

  return (
      <MDBContainer >
        <section style = {container} id = 'about-me' className="about-me-section">
          <h3 style={{fontSize: '50px'}}>Welcome! Get to know Lauren...</h3>
          <div className="parts row">
            <div style={borders} className="parts-wrapper col-md">
              <h5>About Me</h5>
              <NavDropdown.Divider />
              <p>👋 I'm Lauren, a passionate educator turned aspiring <span style={bold}>full stack web developer</span>.  I live outside the Twin Cities in Minnesota. 
              </p>
              <p>👋 My educational background has instilled in me the importance of <span style={bold}>clear communication, attention to detail, and the ability to adapt</span> to various situations — qualities essential to web development.</p>
              <p>👋I've spent years fostering a <span style={bold}>love for learning and problem-solving</span> in young minds. I'm excited to apply these skills to this new field.</p>
            </div>

          <div style={borders} className="parts-wrapper col-md">
            <h5>Education</h5>
            <NavDropdown.Divider />
            <p>🖥️ In May 2015, I earned my <span style={bold}>Bachelor's Degree in Elementary Education and Early Childhood Development</span> from Winona State University. </p>
            <p>🖥️In September 2023, I completed the University of Minnesota's rigorous <span style={bold}>Full Stack Web Development Coding Bootcamp</span>, where I honed my coding skills and developed a strong foundation in web development technologies.</p>
          </div>

          <div className="parts-wrapper col-md">
            <img style={img} src= '/img/headshot.png' alt="Headshot Picture of Lauren"/>
          </div>
        
        </div>
        </section>
        <section style = {container} className="about-me-section">
          <div className="parts row">


            <div className="parts-wrapper col-md">
              <img style={img} src= '/img/kai.jpg' alt='Picture of Kai the Husky Upside Down'/>
            </div>

            <div style={borders} className="parts-wrapper col-md">
              <h5>Hobbies & Interests</h5>
              <NavDropdown.Divider />
              <p>🚀I love spending time with my dog (the cute husky you see over there) Kai. He is a goofball and full of energy. He loves going on walks so we do that a lot! </p>
              <p>🚀In my free time I love to read books -- mostly fantasy!</p>
              <p>🚀I also spend lots of time playing video games. Some of my favorite are DotA 2, Zelda (Windwaker is the best), Portal, and Stardew Valley just to name a few! Puzzle games are something I am always down to try!</p>
            </div>

          <div style={borders} className="parts-wrapper col-md">
            <h5>Professional Experience</h5>
            <NavDropdown.Divider />
            <p>📚During my teaching career, I spent four years as a first-grade teacher, leading Professional Learning Community meetings, designing curriculum, and collaborating on grade-level plans. </p>
            <p>📚Additionally, I served as a kindergarten teacher, where I chaired the Culture and Climate Committee and engaged in weekly planning sessions with my team to enhance the educational experience for our students.</p>
          </div>

        </div>
        </section>
      </MDBContainer>
  )
}