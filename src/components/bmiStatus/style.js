import styled from "styled-components";

export const BmiContainer = styled.div`
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  margin: 10px;

  .header {
    .title {
      font-family: Gilroy !important;
      margin-top: unset;
      margin-bottom: unset;
    }
    display: flex;
    justify-content: space-between;
    .value {
      display: flex;
      align-items: flex-end;
    }
  }
  .bmi-value {
    display: flex;
    justify-content: flex-end;
  }
  .bmi-indicators {
    display: flex !important;
    margin-top: 8px;
    .indicators {
      display: flex;
      align-items: center !important;
      .ant-typography {
        font-family: Gilroy !important;
      }

      .anticon {
        margin-right: 2px;
        svg {
          width: 0.5em;
          height: 0.5em;
        }
      }
    }
  }
`;
