import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pt1.jpg'
import IMG2 from '../../assets/pt2.jpg'
import IMG3 from '../../assets/pt3.png'
import IMG4 from '../../assets/pt4.jpg'
import IMG5 from '../../assets/pt5.jpg'
import IMG6 from '../../assets/pt6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

    <div className='container portfolio_container'>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={IMG1} alt="" />
        </div>
        <h3>Let's See What I Have Here</h3>
       <div className='portfolio_item-cta'>
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://vercel.com" className='btn btn-primary'>Vercel Deployment</a>
        <a href="https://youtube.com/" className='btn' target='_blank'>YouTube Blogs</a>  
        </div> 
      </article>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={IMG2} alt="" />
        </div>
        <h3>Let's See What I Have Here</h3>
        <div className='portfolio_item-cta'>
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://vercel.com" className='btn btn-primary'>Vercel Deployment</a>
        <a href="https://youtube.com/" className='btn' target='_blank'>YouTube Blogs</a>  
        </div> 
      </article>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={IMG3} alt="" />
        </div>
        <h3>Let's See What I Have Here</h3>
        <div className='portfolio_item-cta'>
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://vercel.com" className='btn btn-primary'>Vercel Deployment</a>
        <a href="https://youtube.com/" className='btn' target='_blank'>YouTube Blogs</a>  
        </div> 
      </article>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={IMG4} alt="" />
        </div>
        <h3>Let's See What I Have Here</h3>
        <div className='portfolio_item-cta'>
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://vercel.com" className='btn btn-primary'>Vercel Deployment</a>
        <a href="https://youtube.com/" className='btn' target='_blank'>YouTube Blogs</a>   
        </div>
      </article>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={IMG5} alt="" />
        </div>
        <h3>Let's See What I Have Here</h3>
        <div className='portfolio_item-cta'>
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://vercel.com" className='btn btn-primary'>Vercel Deployment</a>
        <a href="https://youtube.com/" className='btn' target='_blank'>YouTube Blogs</a> 
        </div>  
      </article>
      <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={IMG6} alt="" />
        </div>
        <h3>Let's See What I Have Here</h3>
        <div className='portfolio_item-cta'>
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://vercel.com" className='btn btn-primary'>Vercel Deployment</a>
        <a href="https://youtube.com/" className='btn' target='_blank'>YouTube Blogs</a>  
        </div> 
      </article>
    



    </div>

    </section>
  );
}

export default Portfolio
