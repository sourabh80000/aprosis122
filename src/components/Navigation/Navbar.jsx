import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <SNavbarBrand>
          <img src="./images/logo.png" alt="logo" />
        </SNavbarBrand>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              return <Menu route={route} key={route.name} />;
            })}
          </NavRoutes>
          <LoginButton>
            <FaPhoneSquareAlt />
            <a href="tel:9887883998">9887883998</a>
          </LoginButton>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  background-color: #000000;
  position: fixed;
  top: 0px;
  z-index: 200;
  width: 100%;
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 70px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const SNavbarBrand = styled.h2`
  img {
    width: 15vw;
    margin-top: 8px;
  }
`;
const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  align-items: center;
`;
// const NavRoute = styled(Link)`
//   text-decoration: none;
//   color: white;
//   padding: 2rem 0.5rem;
//   transition: 0.5s ease;

//   &:hover {
//     transition: 0.5s ease;
//     color: black;
//     background-color: #f695c5;
//   }
// `;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  color: white;
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
