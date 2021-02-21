import styled from "styled-components";

const StyledDev = styled.div`
  text-align: right;
  color: ${(p) => p.theme.palette.primary.main};  
`;

const Dev = (props) => {
  return (
    <StyledDev
      {...props}
    >
      <a href="https://github.com/rnuravtsev" target="_blank" rel="noopener noreferrer">@rnuravtsev</a>
    </StyledDev>
  );
};

export default Dev;
