import React from "react";
import "./SmallCard.css";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";


const SmallCard = () => {
  return (
    <motion.div className="smallCard"
      whileHover={{
        border: "5px solid #12B6EB",
      }}
    >
      <motion.div
        className="socialDetails"
        animate={{
           
        }}
        initial={{
          scale :3,
          opacity:0
        }}
        whileHover={{
          opacity: 2.2,
          scale: 1 ,
          
        }}
        
        // onHoverStart={() => {
          
        // }}
        // onHoverEnd={() => {
        //   setOpcaity(0);
        // }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping:100
        }}
      >
        <div className="smallCardTitle">
          <div className="webTitle titleSmall">Web</div>
          <div className="uiTitle titleSmall">UI UX</div>
        </div>
        <div className="smallCardSocial">
          <a>
            <GitHubIcon className="smallCardIcon" />
          </a>

          <a>
            <InstagramIcon className="smallCardIcon" />
          </a>
          <a>
            <LinkedInIcon className="smallCardIcon" />
          </a>
          <a>
            <TwitterIcon className="smallCardIcon" />
          </a>
          <a>
            <FacebookIcon className="smallCardIcon" />
          </a>
        </div>
      </motion.div>
      <div className="smallCardName">Om Prakash</div>
    </motion.div>
  );
};

export default SmallCard;
