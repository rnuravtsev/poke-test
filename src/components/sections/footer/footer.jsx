import styled from "styled-components";

const Footer = styled.section`
  padding: 15px;
  width: 100%;
  height: 11vh;
  background-color: ${(p) => p.theme.palette.grey.main};
  @media ${(p) => p.theme.media.phone} {
    height: auto;
  }
`;

export default Footer;
