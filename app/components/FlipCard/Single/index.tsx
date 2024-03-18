import React, { useState } from "react";
import { motion } from "framer-motion";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

import "./index.css";
const FlipCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [num, setNum] = useState(Math.floor(Math.random() * 13) + 1);
  const [decorType, setDecorType] = useState(Math.floor(Math.random() * 4) + 1);
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setNum(Math.floor(Math.random() * 13) + 1);
      setDecorType(Math.floor(Math.random() * 4) + 1);
    }
  };
  return (
    <motion.div
      className="card"
      onClick={handleCardClick}
      whileHover={{ scale: 1.08 }}
    >
      <div className={`face front-${isFlipped ? "flipped" : "covered"}`}>
        <CardBack />
      </div>
      <div className={`face back-${isFlipped ? "flipped" : "covered"}`}>
        <CardFront num={num} decorType={decorType} />
      </div>
    </motion.div>
  );
};
export default FlipCard;
