import React, { useState } from "react";
import styled from "styled-components";
import { RiDashboardFill } from "react-icons/ri";
import { CgCalendarDates } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi";
import { MdLocalHospital, MdHealing } from "react-icons/md";
import { IoCellular } from "react-icons/io5";
import { BiMessage } from "react-icons/bi";
import "./sidebar.css";
// import { ReactComponent as Logo } from "../../assets/medicx.jpeg";

function SideBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <div className="container">
      <ToggleMenu onClick={handleClick}>
        {open ? <FiX /> : <FiMenu />}
      </ToggleMenu>
      <div onClick={closeMenu} className={open ? "side-bar active" : "side-bar"}>
        <LogoContainer>
          <h2> Logo </h2>
        </LogoContainer>
        <List>
          <ListTitle>General</ListTitle>
          <ListItems>
            <ListItemsIcon>
              <RiDashboardFill />
            </ListItemsIcon>
            <ListItemsText>Dashboard</ListItemsText>
          </ListItems>
          <ListItems>
            <ListItemsIcon>
              <CgCalendarDates />
            </ListItemsIcon>
            <ListItemsText>Calender</ListItemsText>
          </ListItems>
          <ListItems>
            <ListItemsIcon>
              <MdLocalHospital />
            </ListItemsIcon>
            <ListItemsText>Appointment</ListItemsText>
          </ListItems>
          <ListItems>
            <ListItemsIcon>
              <IoCellular />
            </ListItemsIcon>
            <ListItemsText>Statistics</ListItemsText>
          </ListItems>
        </List>
        <List>
          <ListTitle>Tools</ListTitle>
          <ListItems>
            <ListItemsIcon>
              <BiMessage />
            </ListItemsIcon>
            <ListItemsText>Chat</ListItemsText>
          </ListItems>
          <ListItems>
            <ListItemsIcon>
              <MdHealing />
            </ListItemsIcon>
            <ListItemsText>Support</ListItemsText>
          </ListItems>
        </List>
      </div>
    </div>
  );
}

export default SideBar;

const ToggleMenu = styled.div`
  display: none;

  @media (min-width: 320px) and (max-width: 427px) {
    display: block;
    position: absolute;
    top: 1.5%;
    left: 3%;
    padding: 1rem 0;
    cursor: pointer;
    z-index: 15;
  }
`;

const LogoContainer = styled.div`
  padding: 0.8rem;
`;

const List = styled.ul`
  color: #95a4b7;
  padding: 0.8rem;

  @media (min-width: 428px) and (max-width: 919px) {
    padding: 0;
  }
`;

const ListTitle = styled.h4`
  font-size: 13px;
`;

const ListItems = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.7rem 0;
  cursor: pointer;

  @media (min-width: 428px) and (max-width: 919px) {
    font-size: 10px;
  }

  &:hover {
    color: #261362;
  }
`;

const ListItemsIcon = styled.span`
  padding-right: 0.8rem;
`;

const ListItemsText = styled.span``;
