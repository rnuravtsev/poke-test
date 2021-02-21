import Skeleton from "@material-ui/lab/Skeleton";
import styled from "styled-components";

const StyledSkeletonFooter = styled(Skeleton)`
  grid-area: footer;
  height: auto;
`;

const SkeletonFooter = (props) => {
  return (
    <StyledSkeletonFooter {...props} variant="rect"/>
  );
};

export default SkeletonFooter;
