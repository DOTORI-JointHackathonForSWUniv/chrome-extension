import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 99%;
`;

function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default Wrapper;
