import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Page3.css'

export const Page3 = () => {
    const [full, setFull] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setFull(1);
        }, 1000);
       
    })
    return (
        <motion.div className={`w-full h-screen   bg-blue-200   flex flex-col  items-center p-2`}
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
            <div className=' item1  my-5  '>

            </div>
            <div className=' item2  my-5 '></div>
            <div className='item3   my-5 '></div>
            <div className='item4   my-5 '></div>

            <div className='item5   my-5 '></div>

            <div className=' item5  my-5 '></div>

        
        </motion.div>
    )
}
