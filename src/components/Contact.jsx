import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
    return (

        <div className='border-t border-stone-900 pb-20'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-10 text-center text-4xl'>
                Get in Touch
            </motion.h2>

            <div className='text-center tracking-tighter'>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='my-4'>
                    Karala , Delhi-81
                </motion.p>

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                    className='my-4'>
                    +91-8745030616
                </motion.p>

                <a href="#"
                    className='my-4 hover:underline
                     hover:text-teal-300'>
                    sandilyrahul@gmail.com</a>

            </div>

        </div>

    )
}

export default Contact