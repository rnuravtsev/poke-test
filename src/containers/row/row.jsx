import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || `row`};
  justify-content: ${(props) => props.justify || `start`};
  align-items: ${(props) => props.align || `stretch`};
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;

export default Row;
