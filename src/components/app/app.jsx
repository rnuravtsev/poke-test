import Title from "../title/title";
import Container from "../../containers/container/container";
import Row from "../../containers/row/row";
import Col from "../../containers/col/col";

const App = ({ name }) => {
  return (
    <Container>
      <Row>
        <Col col={4}>
          <Title>Hello, {name}</Title>
        </Col>
        <Col col={4}>
          <Title>Hello, {name}</Title>
        </Col>
        <Col col={4}>
          <Title>Hello, {name}</Title>
        </Col>
      </Row>
    </Container>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
