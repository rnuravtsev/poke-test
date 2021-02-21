import styled from "styled-components";

const Logo = styled.img.attrs({
  src: `/assets/images/pokeapp.png`
})`
  width: 100px;
  @media ${(p) => p.theme.media.tablet} {
    width: 150px;
  }
`;

export default Logo;
