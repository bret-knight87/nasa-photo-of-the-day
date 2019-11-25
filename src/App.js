import React from "react";
import "./App.css";
import NasaPhoto from "./NasaPhoto";
import styled from 'styled-components';

function App() {

  const Title = styled.h1`
    color: white;
  `;

  return (

    <div className="App">
      <Title>Nasa Photo Of The Day!</Title>
        <br></br>
        <NasaPhoto />
      </div>
  );
}

export default App;
