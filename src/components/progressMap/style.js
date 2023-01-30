import styled from "styled-components";

export const ProgressContainer = styled.div`
  padding: 10px;
  margin: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  .ant-typography {
    font-weight: bold;
    font-family: Gilroy !important;
  }
  .info {
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .text {
      span {
        font-weight: normal;
        font-size: 14px;
      }
    }
  }
  .graph {
    flex-basis: 70%;
  }
`;
