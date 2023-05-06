import React from "react";
import { Grid } from "@nextui-org/react";
import { motion, MotionConfig } from "framer-motion";
import NeuralNetwork from "../components/NeuralNetwork";
import SearchBox from "../components/SearchBox";
import VideoThumbNail from "../components/VideoThumbNail";

const HomeScreen = () => {
  return (
    <>
      <NeuralNetwork />
      <MotionConfig transition={{ duration: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <SearchBox />
        </motion.div>
      </MotionConfig>
      <MotionConfig transition={{ duration: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Grid.Container gap={2} css={{ marginTop: 15 }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <VideoThumbNail key={item} lectureID={item} />
            ))}
          </Grid.Container>
        </motion.div>
      </MotionConfig>
    </>
  );
};

export default HomeScreen;
