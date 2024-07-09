import React from "react";
import styled from "@emotion/styled";
import "./styles.css";

import { ButtonProps } from "./types";

/*function Button({
  imgSrc = undefined,
  type = "button",
  name = "Send",
  onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick} type={type} className="button-component">
      {/* Если imgSrc === true, то правая часть после && показывается на странице
      Если imgSrc === false, то правая часть после && скрывается */
     /* {imgSrc && <img className="button-img" src={imgSrc} />}
      {!imgSrc && name}
    </button>
  );
}*/
const StyledButton = styled.button<{ isRed?: boolean; disabled?: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.isRed ? "red" : "blue")};
  color: white;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Button: React.FC<ButtonProps> = ({ name, onClick, disabled, isRed }) => (
  <StyledButton onClick={onClick} disabled={disabled} isRed={isRed}>
    {name}
  </StyledButton>
);

export default Button;