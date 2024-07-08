import React, { FC } from "react";
import "./styles.css";

interface SimpsonsCardProps {
  avatar: string;
  name: string;
  occupation: string;
  hobby: string;
}

const SimpsonsCard: FC<SimpsonsCardProps> = ({ avatar, name, occupation, hobby }) => {
  return (
    <div className="simpsons-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>Occupation: {occupation}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
};

export default SimpsonsCard;