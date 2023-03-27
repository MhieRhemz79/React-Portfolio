import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="exprience_frontend">
          <h3>Full Stack  Development</h3>
          <div className='experience_content'>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Laravel</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          </div>
        </div>

{/* END OF FRONTEND  */}

        {/* <div className="exprience_backend">
        <h3>Backend Development</h3>
          <div className='experience_content'> */}
          
          {/* </div>
        </div> */}

{/* END OF BACKEND  */}

<div className="exprience_virtual-assistant">
        <h3>Virtual Assistant</h3>
          <div className='experience_content'>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Lead Generation  Cold Caller Custtomer Support Representative</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Content Marketing  Affiliate Marketing  Social Media Marketing</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>WordPress  Video Editing  Web Designer</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Copywriter  Content Writer Proofreader</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Scheduler  Planner  Back Office Assistant</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          </div>
        </div>

      </div>


    </section>
  );
}

export default Experience
