import Card from "./Card";
import React from "react";
import SmallCard from "./SmallCard";
import "./Part.css";
import { motion } from "framer-motion";

const Part = () => {
  return (
    <div className="webAccord">
      <motion.div
        className="webCard"
        animate={{
          marginLeft: 0,
        }}
        initial={{
          marginLeft: "-100vw",
        }}
        
      >
        <Card />
      </motion.div>

      <motion.div
        className="allMembers"
        animate={{
          marginRight: 0,
        }}
        initial={{
          marginRight: "-100vw",
        }}
        transition={{
          delay:0.2
        }}
        
      >
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </motion.div>
    </div>
  );
};

export default Part;
