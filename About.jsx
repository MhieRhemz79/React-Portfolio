import React from 'react'
import'./about.css'
import ME from '../../assets/6.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience (FullStack WebDeveloper & Virtual Assistant)</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae corporis ex placeat nihil inventore repudiandae perspiciatis nam sint obcaecati consequuntur. Repudiandae pariatur similique voluptate eius, vitae nisi debitis fuga praesentium!
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
