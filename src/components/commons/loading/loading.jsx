import { Backdrop, CircularProgress, Typography, Box } from "@material-ui/core";

const Loading = (props) => {
  const { isShow } = props;

  return (
    <Backdrop open={!isShow}>
      <Box>
        <CircularProgress />
        <Typography variant="h6" component="p">
          Fetching data...
        </Typography>
      </Box>
    </Backdrop>
  );
};

Loading.propTypes = {
  isShow: PropTypes.bool.isRequired,
};

export default Loading;
