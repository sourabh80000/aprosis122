import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ExpandMenu from "./ExpandMenu";
import { FaPhoneSquareAlt } from "react-icons/fa";
const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen}>
        <RightNav>
          <SNavbarBrand>LOGO</SNavbarBrand>
          <NavRoutes>
            {routes.map((route) => {
              return <ExpandMenu route={route} key={route.name} />;
            })}
          </NavRoutes>
          <LoginButton><FaPhoneSquareAlt />9887883998</LoginButton>
        </RightNav>
      </SDrawer>
    </>
  );
};

export default Drawer;
const SNavbarBrand = styled.h2`
  font-size: 3rem;
`;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;

  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 60%;
  background-color: white;
  transition: 0.3s ease;

  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;
const NavRoutes = styled.div``;
const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 2.5rem;
  padding: 0.5rem;
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  color: black;
  border: 1px solid black;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  font-size: 20px;
  background: transparent;

  /* &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  } */
`;
