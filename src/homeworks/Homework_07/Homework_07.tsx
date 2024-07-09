import React, { useState } from "react";
import Feedback from "components/Feedback/Feedback";
import LoginForm from "components/LoginForm/LoginForm";
import SimpsonsCard from "components/SimponsCard/SimponsCard";
import "./styles.css";

const Homework_07: React.FC = () => {
  const [like, setLike] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLike(like + 1);
  const handleDislike = () => setDislikes(dislikes + 1);
  const handleReset = () => {
    setLike(0);
    setDislikes(0);
  };

  return (
    <div className="homework-07">
      <h1>Homework_07</h1>
      <div className="component-container">
        <Feedback
          like={like}
          dislikes={dislikes}
          onLike={handleLike}
          onDislike={handleDislike}
          onReset={handleReset}
        />
        <LoginForm />
        <SimpsonsCard
          avatar="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
          name="Homer Simpson"
          occupation="Safety Inspector"
          hobby="Donuts and TV"
        />
      </div>
    </div>
  );
};

export default Homework_07;