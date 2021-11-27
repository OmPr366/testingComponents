import React from 'react'
import { motion } from 'framer-motion'

export const Page2 = () => {
    return (
        <motion.div className=' w-full h-screen  bg-green-200 flex flex-col items-center  '
        initial={{
            // marginLeft:"-100vw",
            scaleY:0,
        }}
            animate={{
                // marginLeft:0,
                scaleY:1,
            }}
            exit={{
                // marginTop:"-800vh",
                // marginLeft:"80vw",
                scale:0

            }}
            transition={{
                // type:"spring",
                // stiffness:100,
                // delay:0.2
                duration:0.8

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
