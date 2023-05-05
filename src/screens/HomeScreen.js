import React from "react";
import { Grid } from "@nextui-org/react";
import NeuralNetwork from "../components/NeuralNetwork";
import SearchBox from "../components/SearchBox";
import VideoThumbNail from "../components/VideoThumbNail";

const HomeScreen = () => {
  return (
    <div>
      <NeuralNetwork />
      <SearchBox />
      <Grid.Container gap={2} css={{ marginTop: 15 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <VideoThumbNail key={item} lectureID={item} />
        ))}
      </Grid.Container>
    </div>
  );
};

export default HomeScreen;
