import SkeletonHeader from "./skeleton-header/skeleton-header";
import SkeletonSidebar from "./skeleton-sidebar/skeleton-sidebar";
import SkeletonFooter from "./skeleton-footer/skeleton-footer";
import styled from "styled-components";
import SkeletonMain from "./skeleton-main/skeleton-main";

const SkeletonWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 280px 1fr;
  grid-template-rows: 80px 1fr 60px;
  min-height: 100vh;
`;

const SkeletonApp = () => {
  return (
    <>
      <SkeletonWrapper>
        <SkeletonHeader />
        <SkeletonSidebar />
        <SkeletonMain />
        <SkeletonFooter />
      </SkeletonWrapper>
    </>
  );
};

export default SkeletonApp;
