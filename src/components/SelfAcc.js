import React, { useState } from 'react'
import './SelfAcc.css'
import { motion } from 'framer-motion'
import Card from './Card'
import Part from './Part'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const SelfAcc = () => {
    const [clicked, setClicked] = useState(0)
    const [allAcc, setAllAcc] = useState({
        one:1,
        two:0,
        three:0,
        four:0
    })
    var normalVal = {
        
            one:0,
            two:0,
            three:0,
            four:0
        
    }
    const setAccVal = (key,value )=>{
        setAllAcc({
            ...normalVal,
            [key] : value
        })
    }
    return (
        <div className='myAccord'>
            <div className='accord accord1'>
                <div className='title'  >
                    <div className='titleName font-bold'>Web Devlopment</div>
                    <div className='accordIcon' onClick={()=>setAccVal("one",!allAcc.one)}> {allAcc.one?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}</div>
                </div>
             
                {allAcc.one? 
                <motion.div 
                    className='details'
                    // animate={{
                    //     scale:1,
                    //     marginRight:"0vw"
                    // }}
                    // initial={{
                    //     scale:0,
                    //     marginRight:"-100vh"
                    // }}
                    // transition={{
                    //     type:"spring",
                    //     stiffness:"100"
                    // }}
                >
                    <Part/>
                      
                </motion.div>:""}
            </div> 

            {/* Accord 2 */}
            <div className='accord accord2'>
                <div className='title'  >
                    <div className='titleName font-bold'>Web Devlopment</div>
                    <div className='accordIcon' onClick={()=>setAccVal("two",!allAcc.two)}> {allAcc.two?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}</div>
                </div>
             
                {allAcc.two? 
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

            {/* Accord 3 */}
            <div className='accord accord3'>
                <div className='title'  >
                    <div className='titleName font-bold'>Web Devlopment</div>
                    <div className='accordIcon' onClick={()=>setAccVal("three",!allAcc.three)}> {allAcc.three?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}</div>
                </div>
             
                {allAcc.three? 
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



