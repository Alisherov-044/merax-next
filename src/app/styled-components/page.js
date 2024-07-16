"use client";

import styled from "styled-components";

export default function StyledComponents() {
  return <StyledH1>styled components</StyledH1>;
}

const StyledH1 = styled.h1`
  color: red;
  padding: 10px;
  border: 1px solid red;
`;
