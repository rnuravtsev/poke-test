import styled from "styled-components";
import Sidebar from "../../commons/sidebar/sidebar";
import Nav from "../nav/nav";
import Main from "../../commons/main/main";

const StyledMiddle = styled.div`
  @media ${(p) => p.theme.media.tablet} {
    grid-area: middle;
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  @media ${(p) => p.theme.media.desktop} {
    grid-template-columns: 300px 1fr;
  }
`;

const Middle = (props) => {
  return (
    <StyledMiddle>
      <Sidebar>
        <Nav />
      </Sidebar>
      <Main>{props.children}</Main>
    </StyledMiddle>
  );
};

Middle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Middle;
