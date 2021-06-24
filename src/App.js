import "./App.css";
import styled from "styled-components";
import SideBar from "./components/sidebar/sidebar";
import Main from "./components/main/main";

const App = () => <Container>
  <SideBar />
  <Main />
</Container>;

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  transition: left  0.2s !default ease-in-out;
  display: flex;
  
`;
