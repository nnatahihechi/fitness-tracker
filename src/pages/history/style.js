import styled from "styled-components";

export const HistoryWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  .ant-typography {
    font-family: Gilroy !important;
  }

  .main-container {
    padding: 20px;
    padding-top: 60px;

    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: space-between;
    .margin-container {
      margin-bottom: 20px;
    }
    .swipe-box {
      // gap:16px
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        width: 0 !important;
      }
    }
  }
`;
