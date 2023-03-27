import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {RxVercelLogo} from 'react-icons/rx'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://vercel.com" target="_blank"><RxVercelLogo/></a>
    </div>
  );
}

export default HeaderSocials
