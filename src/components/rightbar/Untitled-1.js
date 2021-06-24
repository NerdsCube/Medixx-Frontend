import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  InputGroupAddon,
  InputGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup
} from "reactstrap";
import { FiMenu, FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
// import { BiEnvelope } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { CgCalendarDates } from "react-icons/cg";
import userImg from "../../assets/user.svg";
import calendarIcon from "../../assets/calendarIcon.svg";
import basketIcon from "../../assets/basketIcon.svg";
import envelopeIcon from "../../assets/envelopeIcon.svg";
import mariaImage from "../../assets/mariaImage.jpg";
import notificationImage from "../../assets/notificationImage.jpg";
// import "./header.css";

const Header = () => <Navbar className="root">
        <div>
          <NavLink href="#">
            <FiMenu />
          </NavLink>
        </div>
        <Form className="d-none d-sm-block" inline>
          <FormGroup>
            <InputGroup className='input-group-no-border'>
              <Input id="search-input" placeholder="Search Dashboard" className='focus'/>
              <InputGroupAddon addonType="prepend">
                <span>
                  Search Bar Icon
                </span>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
        <Nav className="ml-auto">
          <NavItem className="d-sm-none mr-4">
            <NavLink className="" href="#">
              <FiSearch />
            </NavLink>
          </NavItem>
          <Dropdown className="tutorial-dropdown mr-2 mr-sm-3">
            <DropdownToggle nav>
              <div>
                  <BsBell />
                  <div className="count"></div>
              </div>
            </DropdownToggle>
            <DropdownMenu right className="navbar-dropdown notifications-dropdown" style={{ width: "340px" }}>
              <DropdownItem><img src={basketIcon} alt="Basket Icon"/><span>12 new orders have arrived today</span></DropdownItem>
              <DropdownItem>
                <div>
                  <div className="d-flex flex-row mb-1">
                    <img src={mariaImage} alt="Maria" className="mariaImage" />
                    <div className="d-flex flex-column">
                      <p className="body-3">Maria</p>
                      <p className="label muted">15 min ago</p>
                    </div>
                  </div>
                  <img src={notificationImage} alt="Notification Icon" className="notificationImage"/>
                  <p className="body-2 muted">It is just a simple image that can define th..</p>
                </div>
              </DropdownItem>
              <DropdownItem>
                <CgCalendarDates />
                <span>1 event has been canceled and ..</span>
              </DropdownItem>
              <DropdownItem><img src={calendarIcon} alt="Calendar Icon"/><span>1 event has been canceled and ..</span></DropdownItem>
              <DropdownItem><img src={envelopeIcon} alt="Envelope Icon"/><span>you have 2 new messages</span></DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav id="basic-nav-dropdown" className="ml-3">
            <DropdownToggle nav caret className="navbar-dropdown-toggle">
              <span className="rounded-circle float-left mr-2">
                <img src={userImg} alt="User"/>
              </span>
              <span className="small d-none d-sm-block ml-1 mr-2 body-1">Christina Carey</span>
            </DropdownToggle>
            <DropdownMenu className="navbar-dropdown profile-dropdown" style={{ width: "194px" }}>
              <DropdownItem>Profile Icon<span>Profile</span></DropdownItem>
              <DropdownItem>Task Icon<span>Tasks</span></DropdownItem>
              <DropdownItem>Message Icon<span>Messages</span></DropdownItem>
              <NavItem>
                <NavLink href="#">
                  <button className="btn btn-primary rounded-pill mx-auto logout-btn" type="submit"><IoIosLogOut /><span className="ml-1">Logout</span></button>
                </NavLink>
              </NavItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>;

export default Header;
