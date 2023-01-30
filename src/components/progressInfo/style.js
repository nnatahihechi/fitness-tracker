import styled from "styled-components";

export const ProgressContainer = styled.div`
  width: 45%;
  margin: 10px;
  flex: 0 0 auto;
  .progressContainer {
    font-family: Gilroy !important;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    align-items: center;
    border-radius: 8px;

    .icon {
      flex-basis: 30%;
      text-align: center;
      .anticon {
        svg {
          width: 2em;
          height: 2em;
        }
      }
    }

    .details {
      flex-basis: 70%;
      display: flex;
      flex-direction: column;
      .desc {
        color: #9d9d9d;
      }
      .text {
        font-family: Gilroy !important;
        font-weight: bolder;
        margin-bottom: 2px;
        margin-top: unset;
        span {
          text-decoration: unset;
          font-weight: normal !important;
          color: #9d9d9d;
          font-size: 14px;
        }
      }
    }
  }
`;
