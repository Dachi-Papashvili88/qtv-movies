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
        <img className="logo-img" src="QTV Logo.svg" alt="საიტის ლოგო" />
        <h3 className="logos-text">ქრისტიანული ფილმები</h3>
      </Logo>
      <MenuButton onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Use React Icons here */}
      </MenuButton>
      <Menu open={menuOpen} className="menu">
        <Link to="/">მთავარი</Link>
        <Link to="movies">ფილმები</Link>
        <Link to="animations">ანიმაციები</Link>
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

  .logo-img {
    height: 2.5em;
    border-radius: 3px;
  }

  h1 {
    margin-left: 0.5em;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .logos-text {
    hover: none;
    text-decoration: none;
    color: white;
    margin-left: 0.6em;
    margin-top: 0.65em;
  }

  a:hover {
    color: #ffffff;
    border-bottom: 1.5px solid white;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    margin-left: 2.5em;
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
    margin-top: 0.5em;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 2rem;
  margin-right: 2.5em;

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
