import React, { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  background: #2563eb;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    background: #2563eb;
  }
`;

const MenuItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    padding: 10px;
    border-bottom: 1px solid white;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>My Portfolio</Logo>
      <MenuButton onClick={() => setMenuOpen(!menuOpen)}>☰</MenuButton>
      <Menu open={menuOpen}>
        <MenuItem><a href="/">Home</a></MenuItem>
        <MenuItem><a href="/about">About Me</a></MenuItem>
        <MenuItem><a href="/projects">Projects</a></MenuItem>
        <MenuItem><a href="/contact">Contact</a></MenuItem>
      </Menu>
    </NavbarContainer>
  );
}

export default Navbar;
