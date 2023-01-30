import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
  a {
    color: #;
  }
  .ant-typography {
    font-family: Gilroy !important;
    margin-bottom: unset;
    margin-top: unset;
    font-weight: bolder;
  }
  .prefix {
    flex-basis: 20%;
  }
  .heading {
    flex-basis: ${({ prefix }) => (prefix ? "60%" : "80%")};
  }
  .suffix {
    flex-basis: 20%;
    display: flex;
    justify-content: flex-end;
    .ant-typography {
      color: #9d9d9d;
    }
    .anticon {
      svg {
        width: 2em;
        height: 2em;
      }
    }
    .underline {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
