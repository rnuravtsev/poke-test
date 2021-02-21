import Skeleton from "@material-ui/lab/Skeleton";
import styled from "styled-components";

const StyledSkeletonHeader = styled(Skeleton)`
  grid-area: header;
  height: auto;
`;

const SkeletonHeader = (props) => {
  return (
    <StyledSkeletonHeader {...props} variant="rect"/>
  );
};

export default SkeletonHeader;
