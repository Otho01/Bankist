import styled from "styled-components";

export const StyledForm = styled.form`
  border: 3px solid;
  border-color: ${(props) => (props.debit ? "red" : "green")};
  display: inline-grid;
  grid-column: 2;
  grid-template-columns: 25% (4);
  width: 400px;
`;
export const StyledH3 = styled.h3`
  aling-self: center;
  margin-left: 10px;
`;
export const StyledSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const StyledLabel = styled.label`
  margin-left: 10px;
`;
export const StyledInput = styled.input`
  display: inline-block;
  align-self: center;
  margin-right: 10px;
`;

export const StyledButton = styled.button`
  align-self: center;
  width: 70px;
  margin: 20px 20px 10px 150px;
`;
