import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer>
      <Logo to="/">
        <img src="logo.png" alt="" />
        <h1>ქრისტიანული ფილმები</h1>
      </Logo>
      <MenuButton onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Use React Icons here */}
      </MenuButton>
      <Menu open={menuOpen}>
        <Link to="/">მთავარი</Link>
        <Link to="about">ფილმები</Link>
        <Link to="contact">კონტაქტი</Link>
      </Menu>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background-color: var(--clr-header);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
    position: relative;
    h1 {
      font-size: 1em;
    }
  }

  img {
    width: 1.5em;
    height: 1.5em;
    border-radius: 3px;
  }

  h1 {
    margin-left: 0.5em;
  }

  
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: white;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    width: 100%;
    padding: 1rem;
    display: ${({ open }) => (open ? "flex" : "none")};
    transition: display 0.3s ease-in-out;
  }
`;

export default Navbar;
