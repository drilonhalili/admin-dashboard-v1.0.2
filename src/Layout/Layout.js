import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navigation/Navbar/Navbar";
import SideDrawer from "../components/Navigation/SideDrawer/SideDrawer";

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh-6rem);
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SideDrawer />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

export default Layout;
