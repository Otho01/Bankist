import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 100px;
  align-items: center;
`;

export const Styledh2Header = styled.h2``;

export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const StyledSectionHeader = styled.section`
  text-align: center;
  background-color: black;
  color: red;
`;

export const StyledTable = styled.table`
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
`;

export const StyledTbody = styled.tbody`
  margin-top: 30px;
  grid-column-start: 1;
  grid-column-end: span col4-start;
`;

export const StyledTr = styled.tr`
  height: 4px;
  text-align: center;
`;
export const StyledTd = styled.td`
  border-style: none;
  padding: 1px 100px 1px 100px;
  justify-content: space-between;
  font-size: small;
  font-weight: 30px;
  background-color: ${(props) =>
    props.backgroundKey % 2 === 0 ? "" : "#d3d3d3"};
`;

export const StyledTh = styled.th`
  justify-content: center;
  width: 100%;
  border-style: none;
  padding: 1px 100px 1px 100px;
  justify-content: space-between;
  font-size: small;
  font-weight: 30px;
`;

export const StyledH2Ledger = styled.h2`
  grid-column-start: 3;
`;

export const StyledParagraph = styled.p`
  text-align: center;
  width: 100%;
  grid-column-start: 4;
`;
