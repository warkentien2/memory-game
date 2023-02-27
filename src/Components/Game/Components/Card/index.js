import React, { useState } from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 5px;
  box-shadow: 0 5px 5px -2px rgba(140, 20, 252, 0.5),
    1px 2px 2px -1px rgba(140, 20, 252, 0.75),
    inset 0 0 1px 1px rgba(60, 04, 109, 0.75);
  background-color: #c228c9;
  opacity: 0.8;
  background-image: repeating-radial-gradient(
      circle at 0 0,
      transparent 0,
      #c228c9 7px
    ),
    repeating-linear-gradient(#f9b3ff55, #f9b3ff);
  height: 20vw;
  width: 15vw;
`;

const Card = () => {
  const [visible, setVisible] = useState(false);

  return <StyledCard />;
};

export default Card;
