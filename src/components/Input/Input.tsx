import React from "react";
import styled from "@emotion/styled";
import {InputProps} from "components/Input/InputProps"
import './styles.css';

/*function Input({ id, name, type, placeholder, label }) {
  return (
    <div className='input-wrapper'>
      <label className='input-label' htmlFor={id}>{label}</label>
      <input className='input-component' id={id} name={name} type={type} placeholder={placeholder} />
    </div>
  );
}*/
const StyledInput = styled.input<{ error?: string; disabled?: boolean }>`
  padding: 10px;
  border: 2px solid ${(props) => (props.error ? "red" : "black")};
  background-color: ${(props) => (props.disabled ? "#f0f0f0" : "white")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

const Input: React.FC<InputProps> = ({ name, type, placeholder, label, disabled, error }) => (
  <div>
    {label && <label>{label}</label>}
    <StyledInput name={name} type={type} placeholder={placeholder} disabled={disabled} error={error} />
    {error && <div style={{ color: "red" }}>{error}</div>}
  </div>
);

export default Input;