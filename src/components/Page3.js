import React from 'react'
import { motion } from 'framer-motion'

export const Page3 = () => {
    return (
        <motion.div className='w-full  bg-blue-200 flex flex-col  items-center p-2'
        initial={{
            marginLeft:"-100vw",
            // scale:0
        }}
            animate={{
                marginLeft:0,
                // scale:1
            }}
            exit={{
                marginTop:"-800vh",
                marginLeft:"80vw",
                scale:0

            }}
            transition={{
                type:"spring",
                stiffness:100,
            }}

        >
            <div className=' w-44 h-60  bg-red-400 my-5  '>

            </div>
            <div className=' w-44 h-60 bg-blue-700 my-5 '></div>
            <div className=' w-44 h-60 bg-red-200 my-5 '></div>
            <div className=' w-44 h-60 bg-green-400 my-5 '></div>

            <div className=' w-44 h-60 bg-blue-700 my-5 '></div>

            <div className=' w-44 h-60 bg-green-400 my-5 '></div>

        
        </motion.div>
    )
}
