import styled from "styled-components";

export const StyledForm = styled.form`
  border: 1px solid color;
  border-color: ${(props) => (props.debit ? "red" : "green")};
`;
