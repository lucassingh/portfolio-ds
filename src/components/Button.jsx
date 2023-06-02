import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: none;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 15px;
  position: fixed;
  z-index:9999;
  cursor: pointer;
  padding:10px;
  top:10px;
  left:20px;
`;

const Button = ({ handleClick, text }) => {

    return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default Button;
