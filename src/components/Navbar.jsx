import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiMovieLine } from "react-icons/ri";
import {AiOutlineHome} from "react-icons/ai"
import {TbBrandYoutubeKids} from "react-icons/tb"
import {LuContact} from "react-icons/lu"

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
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>
      <Menu open={menuOpen} className="menu">
        <NavLink to="/"> <AiOutlineHome /> მთავარი</NavLink>
        <NavLink to="movies"><RiMovieLine/> ფილმები</NavLink>
        <NavLink to="animations"><TbBrandYoutubeKids /> ანიმაციები</NavLink>
        <NavLink to="contact"><LuContact /> კონტაქტი</NavLink>
      </Menu>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background-color: var(--clr-primary-darker);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--uppercase-font);

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
    color: var(--be-text);
    text-decoration: none;
    padding: 6px;
    border-radius: 4px;
  }

  .logos-text {
    hover: none;
    text-decoration: none;
    color: var(--be-text);
    margin-left: 0.6em;
    margin-top: 0.65em;
  }
`;

const Logo = styled(NavLink)`
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
  font-weight: normal;

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
  color: var(--be-text);
  padding: 6px;
  border-radius: 4px;

  @media (min-width: 768px) {
    .active {
      background-color: var(--clr-active);
      transition: 0.2s;
    }
    :hover {
      text-decoration: underline;
      transition: 0.5s;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--clr-primary-lighter);
    width: 100%;
    padding: 1rem;
    display: ${({ open }) => (open ? "flex" : "none")};
    transition: display 0.3s ease-in-out;
    :hover {
      margin-left: 0.5rem;
      transition: 0.3s;
    }
  }
`;

export default Navbar;
