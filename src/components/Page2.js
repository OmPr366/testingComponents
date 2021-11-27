import React from 'react'
import { motion } from 'framer-motion'

export const Page2 = () => {
    return (
        <motion.div className=' w-full  bg-green-200 flex flex-col items-center  '
        initial={{
            opacity:0
        }}
            animate={{
                opacity:1
            }}
            exit={{
                opacity:0
            }}
        >
             <div className=' w-44 h-60  bg-graay-200 my-5  '></div>
            <div className=' w-44 h-60 bg-blue-700 my-5 '></div>
            <div className=' w-44 h-60  bg-red-400 my-5  '></div>
            <div className=' w-44 h-60 bg-blue-700 my-5 '></div>
            <div className=' w-44 h-60 bg-blue-700 my-5 '></div>
            <div className=' w-44 h-60 bg-green-400 my-5 '></div>

            <div className=' w-44 h-60 bg-blue-700 my-5 '></div>

            <div className=' w-44 h-60 bg-green-400 my-5 '></div>
        </motion.div>
    )
}
