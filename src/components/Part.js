import Card from "./Card";
import React from "react";
import SmallCard from "./SmallCard";
import "./Part.css";

const Part = () => {
  return (
    <div className="webAccord">
    <div className="webCard"><Card /></div>
      
      <div className="allMembers">
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

      </div>
    </div>
  );
};

export default Part;
