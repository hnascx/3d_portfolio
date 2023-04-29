import React, { useEffect, useState } from 'react'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}  
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div className='flex flex-row gap-3'>
          <svg width="0" height="0">
            <linearGradient id="green-pink-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="#00cea8" offset="0%" />
              <stop stopColor="#bf61ff" offset="100%" />
            </linearGradient>
          </svg>
          <a 
            href="https://www.linkedin.com/in/henrique-xavier-565aa114b/"
            target='_blank'
            rel="noreferrer noopener"
            className='transition ease-in hover:scale-110 duration-200'
          >
            <BsLinkedin size={26} style={{ fill: "url(#green-pink-gradient)" }} />
          </a>
          <a 
            href="https://encurtador.com.br/fENQV" 
            target='_blank'
            rel="noreferrer noopener"
            className='transition ease-in hover:scale-110 duration-200'
          >
            <BsWhatsapp size={26} style={{ fill: "url(#green-pink-gradient)" }} />
          </a>
          <a 
            href="https://github.com/hnascx"
            target='_blank'
            rel="noreferrer noopener"
            className='transition ease-in hover:scale-110 duration-200'
          >
            <BsGithub size={26} style={{ fill: "url(#green-pink-gradient)" }} />
          </a>
        </div>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${ 
                active === link.title 
                  ? "text-white" 
                  : "text-secondary" 
            } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img 
              src={toggle ? close : menu} 
              alt="menu"
              className='w=[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li 
                  key={link.id}
                  className={`${ 
                  active === link.title 
                    ? "text-white" 
                    : "text-secondary" 
              } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title)
                }}
              >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar