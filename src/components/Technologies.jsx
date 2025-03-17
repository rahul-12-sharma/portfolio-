import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { animate, easeIn, motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

function Technologies() {
    return (

        <div className='pb-24'>

            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Technologies</motion.h2>

            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center 
            justify-center'>

                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(2, 5)}>
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>

                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(3)}
                    className='p-4'>
                    <SiMongodb className='text-7xl text-green-400' />
                </motion.div>

                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(5)}
                    className='p-4'>
                    <DiRedis className='text-7xl text-amber-200' />
                </motion.div>

                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(2)}
                    className='p-4'>
                    <FaNodeJs className='text-7xl text-green-200' />
                </motion.div>

                <motion.div
                    initial='initial'
                    animate='animate'
                    variants={iconVariants(6)}
                    className='p-4'>
                    <BiLogoPostgresql className='text-7xl text-purple-300' />
                </motion.div>

            </motion.div>

        </div>

    )
}

export default Technologies