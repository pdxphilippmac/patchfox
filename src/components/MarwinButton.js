import React from "react";
import styled from "styled-components";

const sizes = {
  small: { width: "40px", height: "20px" },
  medium: { width: "60px", height: "30px" },
  large: { width: "80px", height: "40px" }
};

function getSize(size) {
  return sizes[size] || sizes.medium;
}

const StyledButton = styled.button`
  width: ${props => getSize(props.size).width};
  height: ${props => getSize(props.size).height};
`;

const MarwinButton = ({ size }) => {
  return <StyledButton size={size} />;
};

export default MarwinButton;
