import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Menu = ({ route }) => {
  return (
    <SMenu>
      <MenuButton>{route.name}</MenuButton>
      <SubRoutesContainer>
        {route.subRoutes.map((subRoute) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            <Link to={subRoute.link}>{subRoute.name}</Link>
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default Menu;
const SubRoutesContainer = styled.div`
  position: absolute;
  min-width: 35rem;
  max-height: 85vh;
  overflow: auto;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  left: -1rem;
  visibility: hidden;
  opacity: 0;
  z-index: 250;
  border-radius: 1rem;
  background-color: white;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
  &:hover {
    transition: 0.5s ease;
    color: black;
    background-color: #eab308;
    box-shadow: 0px 0px 10px black;
    border-radius: 0.5rem;
  }
`;

const SubRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 300;
  transition: 0.3s ease-in;

  &:hover {
    transition: 0.3s ease-in;
    color: black;
    background-color: #eab308;
    font-weight: 400;
    transition: ease;
    animation-duration: 0.3s;
  }
`;
