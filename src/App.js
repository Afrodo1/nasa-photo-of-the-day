import React from "react";
import APOD from "./components/APOD";
import "./App.css";
import styled from "styled-components";
// import DateChanger from "./DateChanger";


 const Header  = styled.div`
    display: flex;
    justify-content: center;
`;

 const Box  = styled.div`
    display: flex;
    flex:direction: column;
    align-content: center;
    width: 50%;
    margin-left: 25%;    
    img{
      width: 80%;
    }
    background-color: grey;
 
    
    
`;
const Container = styled.div`
  display: flex:
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #F2EDD8; 
  `;



function App() {
  
  return (
  <Container className="cont">
    {/* <DateChanger/> */}
    <Header className="header">    
       
        <h1>Astronomy Picture of the Day</h1>      
    </Header>
    <Box className="App">
        <APOD/> 
    </Box>
  </Container>
  );
}

export default App;
