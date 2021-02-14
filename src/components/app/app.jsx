const App = ({name}) => {
  return (
    <h1>Hello, {name}</h1>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired
}

export default App;
