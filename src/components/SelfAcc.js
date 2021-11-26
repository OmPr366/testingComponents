import React, { useEffect, useState } from 'react'
import './SelfAcc.css'
import { motion } from 'framer-motion'
import Card from './Card'
import Part from './Part'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const SelfAcc = () => {
    const [count, setCount] = useState(0);
    const [allAcc, setAllAcc] = useState({
        one:0,
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
    useEffect(() => {
        if(count==0){
        setTimeout(() => {
            
            setAllAcc({
                one:1,
            two:0,
            three:0,
            four:0
            })
            setCount(1);
        }, 1500);
    }
    })
    return (
        <div className='myAccord'>
            <motion.div 
                className='accord accord1'
                animate={{
                    
                    marginTop:"1rem"
                }}
                initial={{
                    marginTop:"-100vh"
                }}
                transition={{
                    delay:0.8
                }}
            >
                <div className='title rounded-2xl '  >
                    <div className='titleName font-bold'>Web Devlopment</div>
                    <div className='accordIcon cursor-pointer  ' onClick={()=>setAccVal("one",!allAcc.one)}> {allAcc.one?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}</div>
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
            </motion.div> 

            {/* Accord 2 */}
            <motion.div 
                className='accord accord2'
                animate={{
                    marginTop:"1rem"
                }}
                initial={{
                    marginTop:"-100vh"
                }}
                transition={{
                    delay:0.8
                }}
            >
                <div className='title rounded-2xl'  >
                    <div className='titleName font-bold'>Web Devlopment</div>
                    <div className='accordIcon cursor-pointer'  onClick={()=>setAccVal("two",!allAcc.two)}> {allAcc.two?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}</div>
                </div>
             
                {allAcc.two? 
                <motion.div 
                    className='details'
                    
                >
                    <Part/>
                      
                </motion.div>:""}
            </motion.div> 

            {/* Accord 3 */}
            <motion.div 
                className='accord accord3'
                animate={{
                    marginTop:"1rem"
                }}
                initial={{
                    marginTop:"-100vh"
                }}
                transition={{
                    delay:0.5
                }}
            >
                <div className='title rounded-2xl'  >
                    <div className='titleName font-bold'>Web Devlopment</div>
                    <div className='accordIcon cursor-pointer' onClick={()=>setAccVal("three",!allAcc.three)}> {allAcc.three?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}</div>
                </div>
             
                {allAcc.three? 
                <motion.div 
                    className='details'>
                    <Part/>
                      
                </motion.div>:""}
            </motion.div> 
        </div>
    )
}

export default SelfAcc



