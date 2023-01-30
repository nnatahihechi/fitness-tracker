import styled from "styled-components";

export const InfoBoxContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  .header {
    .title {
      font-family: Gilroy !important;
      margin-top: unset;
    }
    display: flex;
    justify-content: space-between;
  }
  .content {
    text-align: center;
    strong {
      font-family: Gilroy !important;
      font-size: 30px;
    }
  }
`;
