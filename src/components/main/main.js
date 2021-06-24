import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { ReactComponent as ProfilePic } from "../../assets/user.svg";
import Tab from "../dashboard/tab/tab";
import RightBar from "../rightbar/rightbar";

function Main() {
  return (
    <Container>
      <Header>
        <SearchBox>
          <SearchIconBox>
            <FiSearch style={{ color: "#95a4b7" }} />
          </SearchIconBox>
          <Search type="search" />
        </SearchBox>
        <Profile>
          <ProfilePic style={{ marginRight: ".5rem" }} />
          <IoIosAddCircle style={{ fontSize: "3rem", color: "#616bbe" }} />
        </Profile>
        <Icon>
          <BsBell />
        </Icon>
      </Header>
      <Jumbotron>
        <DashBoard>
          <DashBoardHeader>
            <h1>Dashboard</h1>
            <div>
              <select>
                <option value="this week">this week</option>
                <option value="next week">next week</option>
              </select>
              <BiDotsHorizontalRounded />
            </div>
          </DashBoardHeader>
          <Tab />
        </DashBoard>
        <div>
          <RightBar />
        </div>
      </Jumbotron>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 82vw;
  padding: 1rem; 

  @media (max-width: 427px) {
    width: 100vw;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const SearchBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  width: 50%;
  padding: 0.5rem;
  margin-right: 0.5rem;
  position: relative;
`;

const Search = styled.input`
  border: 0;
  outline: 0;
  margin: 0.1rem;
  position: absolute;
  width: 80%;

  @media (min-width: 428px) and (max-width: 919px) {
    width: 60%;
  }

  @media (min-width: 320px) and (max-width: 427px) {
    width: 70%;
  }
`;

const SearchIconBox = styled.span`
  margin: 1rem;

  @media (min-width: 320px) and (max-width: 427px) {
    margin: 0.5rem;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: #616bbe;
  cursor: pointer;
  font-size: 1.5rem;
`;

const Jumbotron = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const DashBoard = styled.div`
  margin-right: 1rem;
`;

const DashBoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #616bbe;
  }

  select {
    border: 0;
    outline: 0;
    border-radius: 25px;
  }
`;
