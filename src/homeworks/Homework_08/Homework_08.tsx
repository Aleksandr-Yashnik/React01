import React from "react";
import styled from "@emotion/styled";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const Homework_08: React.FC = () => {
  return (
    <Container>
      <h1>Homework_08</h1>
      <Input name="test" type="text" label="Enabled Input" />
      <Input name="test" type="text" label="Disabled Input" disabled />
      <Input name="test" type="text" label="Error Input" error="Some error" />
      <Button name="Normal Button" onClick={() => alert("Clicked!")} />
      <Button name="Disabled Button" onClick={() => alert("Clicked!")} disabled />
      <Button name="Red Button" onClick={() => alert("Clicked!")} isRed />
    </Container>
  );
};

export default Homework_08;