import React from "react";
import { Grid } from "@nextui-org/react";
import "./App.css";
import NeuralNetwork from "./components/NeuralNetwork";
import VideoThumbNail from "./components/VideoThumbNail";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <NeuralNetwork />
      <SearchBox />
      <Grid.Container gap={1} css={{ marginTop: 15 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <VideoThumbNail />
        ))}
      </Grid.Container>
    </div>
  );
}

export default App;
