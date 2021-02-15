import Header from "../header/header";
import Footer from "../footer/footer";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Logo from "../logo/logo";
import Dev from "../dev/dev";
import Sidebar from "../sidebar/sidebar";

const BaseLayout = (props) => {
  return (
    <>
      <Header>
        <Container fluid>
          <Row>
            <Col noGutter>
              <Logo />
            </Col>
          </Row>
        </Container>
      </Header>
      <Container fluid>
        <Row>
          <Col col={2} noGutter>
            <Sidebar>
              <Row>
                <Col col={6}>1</Col>
                <Col col={6}>2</Col>
              </Row>
            </Sidebar>
          </Col>
          <Col col>{props.children}</Col>
        </Row>
      </Container>
      <Footer>
        <Container fluid>
          <Row>
            <Col noGutter>
              <Row>
                <Col col xs={6}>
                  <Logo />
                </Col>
                <Col col xs={6}>
                  <Dev>
                    <p>@rnuravtsev</p>
                  </Dev>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Footer>
    </>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
