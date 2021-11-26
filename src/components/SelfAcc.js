import React, { useState } from 'react'
import './SelfAcc.css'
import { motion } from 'framer-motion'
import Card from './Card'
import Part from './Part'


const SelfAcc = () => {
    const [clicked, setClicked] = useState(0)
    return (
        <div className='myAccord'>
            <div className='accord1'>
                <div className='title' onClick={()=>setClicked(!clicked)} >op</div>
             
                {clicked? 
                <motion.div 
                    className='details'
                    animate={{
                        scale:1,
                        marginRight:"0vw"
                    }}
                    initial={{
                        scale:0,
                        marginRight:"-100vh"
                    }}
                    transition={{
                        type:"spring",
                        stiffness:"100"
                    }}
                >
                    <Part/>
                      
                </motion.div>:""}
            </div> 
        </div>
    )
}

export default SelfAcc



