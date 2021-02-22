import styled from "styled-components";

const StyledMain = styled.main`
  padding: 15px;
`;

const Main = (props) => {
  return (
    <StyledMain>
      {props.children}
    </StyledMain>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;
