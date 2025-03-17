import React from 'react'
import logo from '../assets/raviKumarLogo.webp'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Navbar() {
    return (

        <nav className='flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <a href="" aria-label='Home'>
                    {/* <img src={logo} className='mx-2' width={50} height={33} alt="" /> */}
                    <h1 className='mx-2 font-bold text-4xl'>RS</h1>
                </a>
            </div>

            <div
                className='m-8 flex items-center justify-center gap-4 text-2xl'>
                
                <a href="https://github.com/rahul-12-sharma"
                    target='_blank'
                    rel='noonpener noreferrer'
                    aria-label='GitHub'>
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/rahul-sharma-69509b33a/"
                    target='_blank'
                    rel='noonpener noreferrer'
                    aria-label='LinkedIn'>
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/winner_ecom/"
                    target='_blank'
                    rel='noonpener noreferrer'
                    aria-label='Instagram'>
                    <FaInstagram />
                </a>

            </div>
        </nav>

    )
}

export default Navbar