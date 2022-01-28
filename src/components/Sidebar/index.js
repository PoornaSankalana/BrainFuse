import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarRoute,
  SidebarLink,
  SideBarButtonWrap,
} from "./SidebarElements";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="Services">Services</SidebarLink>
          <SidebarLink to="Sign Up">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBarButtonWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBarButtonWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}
