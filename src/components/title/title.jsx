import styled from "styled-components";

const Title = styled(`h1`)`
  background-color: ${(props) => props.theme.palette.primary.main};
  @media ${(props) => props.theme.media.phone} {
    background-color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export default Title;
