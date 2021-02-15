import styled from "styled-components";

const Col = styled.div`
  position: relative;
  flex: 0 0 ${(props) => (props.col / 12 * 100) + `%` || `100%`};
  max-width: ${(props) => (props.col / 12 * 100) + `%` || `100%`};
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

export default Col;
