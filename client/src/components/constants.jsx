import styled from 'styled-components';

const primary = '#68B25D';
const secondary = '#00AAAA';
const tertiary = '#050802';

const title = 'JobSite';
const slogan = 'Connecting people with jobs and jobs with people';
const url = 'http://3.134.101.103:4000/api';

const modalBackdrop = `
  background-color: #02020280;
  backdrop-filter: blur(5px);
  animation-name: blur-in;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 0.25s;
  @keyframes blur-in {
    0% {
      opacity: 0.2;
      backdrop-filter: blur(0px);
    }
    100% {
      opacity: 1;
      backdrop-filter: blur(5px);
    }
  }`;

const hoverEffect = `
  transition-duration: 0.25s;
  &:hover {
    cursor: pointer;
    filter: opacity(0.8) saturate(125%);
  }`;

const navButtonDiv = styled.div`
  height: 6vh;
  width: auto;
  position: absolute;
  top: 0;
  right: 5vw;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const navButton = styled.a`
  position: relative;
  text-align: center;
  height: 4vh;
  margin: 0 1vw;
  line-height: 4vh;
  letter-spacing: 1px;
  width: auto;
  padding: .25vh 1.5vw;
  text-decoration: none;
  background: ${secondary};
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
  ${hoverEffect}
`;

const searchButton = styled.button`
  width: max(10vw, 150px);
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  height: 5vh;
  padding: 0 1.25vw;
  background: ${secondary};
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
  ${hoverEffect}
`;

const searchField = styled.input`
  width: max(21vw, 250px);
  font-size: 1rem;
  font-weight: bold;
  height: 4.8vh;
  padding: 0 1.25vw;
  background: #fff;
  border: 1px solid #aeaeae;
  border-radius: 25px;
  color: #424242;
`;

const listCard = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 10vh;
  width: 95%;
  background-color: #fff;
  border: solid 1px #e0e0e0;
  border-radius: 5px;
  margin: .25vh 0;
  padding: .5vh 1%;
  font-family: Arial, sans-serif;
  color: #424242;
  &:hover {
    cursor: pointer;
    border-color: ${secondary};
  }
`;

export default {
  primary,
  secondary,
  tertiary,
  title,
  slogan,
  url,
  listCard,
  modalBackdrop,
  hoverEffect,
  navButton,
  navButtonDiv,
  searchButton,
  searchField,
};
