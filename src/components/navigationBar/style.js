import styled from "styled-components";

export const NavigationWrapper = styled.div`
  padding: 12px;
  border-top-left-radius: 44px;
  border-top-right-radius: 44px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding-bottom: 30px;
  padding-top: 30px;
  .ant-popover {
    width: 343px;
}
  }
  .main-icon {
    margin-top: -55px;
    .anticon {
      svg {
        width: 3.5em !important;
        height: 3.5em !important;
      }
    }
  }
  .ant-col {
    display: flex;
    justify-content: center;
    .anticon {
      cursor: pointer;
      svg {
        width: 2em;
        height: 2em;
      }
    }
  }
`;
