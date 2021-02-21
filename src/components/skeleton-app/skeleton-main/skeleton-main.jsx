import Skeleton from "@material-ui/lab/Skeleton";
import styled from "styled-components";

const StyledSkeletonMain = styled(Skeleton)`
  grid-area: main;
`;

const SkeletonMain = (props) => {
  return <StyledSkeletonMain {...props} variant="rect" />;
};

export default SkeletonMain;
