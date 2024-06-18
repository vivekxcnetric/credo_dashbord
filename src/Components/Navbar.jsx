import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineQuestionMarkCircle, HiOutlineSearch } from "react-icons/hi";
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import LogoImage from '../Asset/logo.png';
import User from '../Asset/user.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();


  if (location.pathname === "/") return null;

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderNavItems = () => {
    if (location.pathname === "/dashboard") {
      return (
        <>
          <IconContainer>
            <HiOutlineSearch size={20} />
          </IconContainer>
          <Link to="/settings">
            <IconContainer>
              <HiOutlineQuestionMarkCircle size={20} />
            </IconContainer>
          </Link>
          <UserProfile src={User} alt="User Profile" />
        </>
      );
    }

    if (location.pathname === "/settings") {
      return (
        <>
          <NavItem to="/dashboard">Dashboard</NavItem>
          <NavItem to="/settings" style={{ opacity: "0.8" }}>Settings</NavItem>
          <NavItem to="/monitored-urls">MonitoringURL</NavItem>
          <IconContainer>
            <HiOutlineSearch size={20} />
          </IconContainer>
          <Link to="/settings">
            <IconContainer>
              <HiOutlineQuestionMarkCircle size={20} />
            </IconContainer>
          </Link>
          <UserProfile src={User} alt="User Profile" />
        </>
      );
    }

    if (location.pathname === "/monitoring" || location.pathname.includes("/monitoring/")) {
      return (
        <>
          <NavItem to="/dashboard">Dashboard</NavItem>
          <NavItem to="/monitoring">Profile</NavItem>
          <IconContainer>
            <HiOutlineSearch size={20} />
          </IconContainer>
          <Link to="/settings">
            <IconContainer>
              <HiOutlineQuestionMarkCircle size={20} />
            </IconContainer>
          </Link>
          <UserProfile src={User} alt="User Profile" />
        </>
      );
    }

    return (
      <>
        <NavItem to="/dashboard">Dashboard</NavItem>
        <NavItem to="/settings">Settings</NavItem>
        <NavItem to="/monitored-urls">MonitoringURL</NavItem>

        <IconContainer>
          <HiOutlineSearch size={20} />
        </IconContainer>
        <Link to="/settings">
          <IconContainer>
            <HiOutlineQuestionMarkCircle size={20} />
          </IconContainer>
        </Link>
        <UserProfile src={User} alt="User Profile" />
      </>
    );
  };

  return (
    <>
      <NavBar>
        <LogoContainer>
          <Link to='/dashboard'>
          <Logo src={LogoImage} alt="Logo" />
          </Link>
        </LogoContainer>
        <NavItems>
          {renderNavItems()}
        </NavItems>
        <Hamburger onClick={toggleDrawer}>
          {drawerOpen ? <IoMdClose size={24} /> : <FaBars size={24} />}
        </Hamburger>
      </NavBar>
      <Drawer open={drawerOpen}>
        <DrawerNavItems>
          {renderNavItems()}
        </DrawerNavItems>
      </Drawer>
    </>
  );
};

export default Navbar;

const NavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #008080;
  padding: 0 20px;
  height: 60px;
  color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
`;

const Hamburger = styled.div`
  display: none;
  position: absolute;
  right: 20px;
  top: 15px;
  cursor: pointer;
  z-index: 10000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: #008080;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

const DrawerNavItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 60px;
  gap: 20px;
`;

const NavItem = styled(Link)`
  margin-left: 30px;
  font-size: 18px;
  cursor: pointer;
  color: white;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 20px;
    font-size: 20px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

const UserProfile = styled.img`
  margin-left: 20px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    margin-left: 10px;
  }
`;
