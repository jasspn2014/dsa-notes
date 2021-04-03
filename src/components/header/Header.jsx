import styled, { css } from "styled-components";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <Container>
      <Logo>Jasmeet Singh</Logo>
      <Menu>
        <MenuItemLink to="/">Home</MenuItemLink>
        <MenuItemLink to="/problems">Problem Sets</MenuItemLink>
        <MenuItemDiv onClick={() => window.open("https://www.google.com")}>
          Portfolio
        </MenuItemDiv>
      </Menu>

      <BurgerMenu>
        {isBurgerOpen ? (
          <CloseIcon fontSize="large" onClick={toggleBurgerMenu} />
        ) : (
          <MenuIcon fontSize="large" onClick={toggleBurgerMenu} />
        )}
      </BurgerMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #000;
  color: white;
`;

const Logo = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 1.5em;
`;

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  width: 30%;
  justify-content: space-around;
  font-family: "Poppins", sans-serif;
  display: none;

  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`;

const MenuStyle = css`
  cursor: pointer;
  text-decoration: none;
  color: white;
  :hover {
    color: orange;
    transition: color 1s ease;
  }
`;

const MenuItemLink = styled(Link)`
  ${MenuStyle};
`;

const MenuItemDiv = styled.div`
  ${MenuStyle};
`;

const BurgerMenu = styled.div`
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;
