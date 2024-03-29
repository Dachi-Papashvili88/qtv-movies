import { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiMovieLine, RiMovie2Line } from "react-icons/ri";
import { TbBrandYoutubeKids, TbMovie } from "react-icons/tb";
import { BiLogIn } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import Search from "./Search";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer>
      <Logo to="/">
        <img className="logo-img" src="QTV Logo.svg" alt="საიტის ლოგო" />
        <h3 className="logos-text">ქრისტიანული ფილმები</h3>
      </Logo>
      <Search />
      <MenuButton onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>
      <Menu open={menuOpen} className="menu">
        <NavLink to="/movies" onClick={toggleMenu}>
          <RiMovieLine /> ფილმები
        </NavLink>
        <NavLink to="/series" onClick={toggleMenu}>
          <TbMovie /> სერიალები
        </NavLink>
        <NavLink to="/animations" onClick={toggleMenu}>
          <TbBrandYoutubeKids /> ანიმაციები
        </NavLink>
        <NavLink to="/documentary" onClick={toggleMenu}>
          <RiMovie2Line /> დოკუმენტური
        </NavLink>
        {user?.email ? (
          <div className="personal-account">
            <NavLink className="account" to="/account" onClick={toggleMenu}>
              <MdAccountCircle/>
            </NavLink>
            <button onClick={handleLogout}>გამოსვლა</button>
          </div>
        ) : (
          <div className="profile">
            <Link className="profile-link" to="/login" onClick={toggleMenu}>
              <BiLogIn /> შესვლა
            </Link>
            {/*<Link to="/signup" onClick={toggleMenu}>Sign Up</Link>*/}
          </div>
        )}
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
    margin-left: -2.5em;
    @media (max-width: 768px) {
      margin-left: -1em;
    }
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
  z-index: 4;

  @media (min-width: 768px) {
    .active {
      background-color: var(--clr-active);
      transition: 0.2s;
    }
    :hover {
      color: red;
      transition: all 1s ease-out;
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    gap: 1.2rem;
    top: 100%;
    left: 0;
    font-size: 1.1rem;
    background-color: var(--clr-primary-lighter);
    width: 100%;
    padding: 1rem;
    display: ${({ open }) => (open ? "flex" : "none")};
    transition: display 0.3s ease-in-out;
    :hover {
      margin-left: 1rem;
      transition: 0.7s;
    }
  }

  .profile {
    display: flex;
    gap: 10px;
    @media (min-width: 768px) {
      position: relative;
      left: 30px;
      font-size: 0.9rem;
    }
  }
  
  .personal-account {
    display: flex;
    align-items: center;
  }

  .account {
    font-size: 1.2rem;
    pading: 0;
    :hover {
      color: none;
    }
  }
  .account:active {
    padding: 0;
  }

  button {
    font-size: 0.7rem;
    font-family: var(--uppercase-font);
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
  }
  button:hover {
    cursor: pointer;
  }
`;

export default Navbar;
