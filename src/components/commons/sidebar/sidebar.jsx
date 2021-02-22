import styled from "styled-components";

const Sidebar = styled.aside`
  padding: 15px;
  display: none;
  background-color: ${(p) => p.theme.palette.primary.main};
  @media ${(p) => p.theme.media.tablet} {
    display: block;
  }
`;

export default Sidebar;
