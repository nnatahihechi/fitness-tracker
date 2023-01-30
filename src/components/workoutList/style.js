import styled from "styled-components";

export const WorkoutListContainer = styled.div`
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  .icon {
    flex-basis: 20%;
    display: flex;
    justify-content: center;
    .anticon {
      svg {
        width: 2em;
        height: 2em;
      }
    }
  }
  .play {
    .anticon {
      svg {
        width: 2.5em;
        height: 2.5em;
      }
    }
  }
  .text {
    display: flex;
    flex-basis: ${({ showPlay }) => (showPlay ? "60%" : "80%")};
    font-family: Gilroy !important;
    font-weight: bolder;
  }
`;
