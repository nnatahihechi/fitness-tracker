import styled from "styled-components";

export const BmiWrapper = styled.div`
  display: flex;
  height: 100%;
  width:100%;
  flex-direction: column;
  justify-content: space-between;
  .ant-typography{
    font-family: Gilroy !important;
  }
  .two-split{
    margin-bottom: 36px;
    display:flex;
    width:100%;
    gap: 10px;
    .item{
        flex-basis: 50%;
    }
  }
  .button-select-bottom{
    display: flex;
    justify-content: center;
    width: q00%;
  }
  .main-container {
    padding: 20px;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .rule {
        margin-bottom: 36px;
    }
    .bmi-value {
     margin-bottom: 15px;
      width: 150px;
      height: 150px;
      position: relative;
      text-align: center;
      letter-spacing: 1.6px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      &:before {
        background: #7B66FF;
        content: "";
        position: absolute;
        border-radius: 20px;
        box-shadow: 0 0 0 3px background: #7B66FF;
        top: -5%;
        bottom: -11%;
        left: -1%;
        right: -5%;
        -webkit-transform: perspective(40em) rotateX(-45deg);
        transform: perspective(40em) rotateX(-45deg);
      }
      span {
        font-family: Gilroy !important;
        color: #fff;
        font-size: 2em;
        position: relative;
        font-weight:1000;
        font-size: 50px;

      }
    }
  }
`;
