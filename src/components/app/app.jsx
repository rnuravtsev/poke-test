import Title from "../title/title";

const App = ({ name }) => {
  return (
    <Title>
      Hello, {name}
    </Title>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
