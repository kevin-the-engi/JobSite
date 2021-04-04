import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 9.5vh;
  width: 95%;
  background-color: #fff;
  border: solid 1px #e0e0e0;
  border-radius: 10px;
  padding: .5vh 1%;
  font-family: Arial, sans-serif;
  color: #424242;
`;

const Name = styled.h1`
  margin: .5vh 0 .25vh 0;
  font-size: 1rem;
  font-weight: bold;
`;

const Summary = styled.p`
  margin: 0;
  font-weight: lighter;
  font-style: italic;
`;

const TileBody = styled.p`
  margin: 0;
  font-weight: lighter;
`;

const SeekerTile = (props) => {
  return (
    <Tile onClick={() => props.toggleModal()}>
      <Name>Bobby Grundle</Name>
      <Summary>Javascript | React | Node</Summary>
      <TileBody>Degree: Bachelors, Computer Science</TileBody>
      <TileBody>Last Position: Software Engineer @ Google</TileBody>
    </Tile>
  );
};

export default SeekerTile;
