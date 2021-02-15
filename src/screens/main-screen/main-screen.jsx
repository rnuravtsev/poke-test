import Title from "../../components/title/title";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Main from "../../components/main/main";

const MainScreen = () => {
  return (
    <>
      <Main>
        <Container>
          <Row>
            <Col col={4}>
              <Title>Hello, na</Title>
            </Col>
            <Col col={4}>
              <Title>Hello, nam</Title>
            </Col>
            <Col col={4}>
              <Title>Hello, name</Title>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default MainScreen;
