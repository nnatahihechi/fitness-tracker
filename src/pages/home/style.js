import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  .main-container {
    padding: 20px;
    padding-top: 60px;
  }
  .progressInfos {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    margin-bottom: 30px;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
  .chart {
    margin-bottom: 30px;
  }
`;
