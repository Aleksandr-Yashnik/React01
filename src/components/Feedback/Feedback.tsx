import React, { FC } from "react";
import Button from "../Button/Button";
import "../Feedback/styles.css";

interface FeedbackProps {
  like: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
  onReset: () => void;
}

const Feedback: FC<FeedbackProps> = ({ like, dislikes, onLike, onDislike, onReset }) => {
  return (
    <div className="feedback">
      <div className="buttons">
        <Button name="👍 Like" onClick={onLike} />
        <span>{like}</span>
        <Button name="👎 Dislike" onClick={onDislike} />
        <span>{dislikes}</span>
      </div>
      <Button name="Reset Results" onClick={onReset} />
    </div>
  );
};

export default Feedback;