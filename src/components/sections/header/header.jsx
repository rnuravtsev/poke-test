import styled from "styled-components";

const Header = styled.section`
  padding: 15px;
  background-color: ${(p) => p.theme.palette.grey.main};
  @media ${(p) => p.theme.media.tablet} {
    height: 11vh;
  }
`;

export default Header;
