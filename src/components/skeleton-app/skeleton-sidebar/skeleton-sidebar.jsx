import Skeleton from "@material-ui/lab/Skeleton";
import styled from "styled-components";

const StyledSkeletonSidebar = styled(Skeleton)`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SkeletonSidebar = (props) => {
  return (
    <StyledSkeletonSidebar {...props} variant="rect">
      <Skeleton variant="text"/>
      <Skeleton variant="text"/>
      <Skeleton variant="text"/>
    </StyledSkeletonSidebar>
  );
};

export default SkeletonSidebar;
