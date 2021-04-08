import styled from 'styled-components';

const primary = '#68B25D';
const secondary = '#00AAAA';
const tertiary = '#050802';

const title = 'JobSite';
const slogan = 'Connecting people with jobs and jobs with people';

const url = 'http://3.134.101.103:4000/api';

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
  modalBackdrop: `
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
    }`,
  hoverEffect: `
    transition-duration: 0.25s;
    &:hover {
      cursor: pointer;
      filter: opacity(0.8) saturate(125%);
    }`,
};
