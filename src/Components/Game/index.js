import React, { useState } from "react";
import Card from "./Components/Card";
import styled from "styled-components";

const StyledGame = styled.main`
  display: grid;
  gap: 3vw;
  margin: 3vw;
`;

const Game = () => {
  const [cards, setCards] = useState([
    {
      name: "bird"
    },
    {
      name: "cat"
    }
  ]);

  return (
    <StyledGame>
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </StyledGame>
  );
};

export default Game;
