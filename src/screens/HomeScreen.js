import React from "react";
import { Grid } from "@nextui-org/react";
import { motion, MotionConfig } from "framer-motion";
import NeuralNetwork from "../components/NeuralNetwork";
import SearchBox from "../components/SearchBox";
import VideoThumbNail from "../components/VideoThumbNail";

const lectures = [
  {
    title: "GraphQL Explained in 100 Seconds",
    desc: "What is GraphQL? Learn how it compares to REST and why developers love this query language for reading and mutating data in APIs",
    ID: "eIQh02xuVw4&t=41s",
    img: "https://images.pexels.com/photos/4385547/pexels-photo-4385547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "PHP in 100 Seconds",
    desc: "ting language for building dynamic websites on the server. It remains one of the most popular programming languages in the world, powering tools like Wordpress, Laravel, and Symfony.",
    ID: "a7_WFUlFS94&t=4s",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "React in 100 Seconds",
    desc: "React is a little JavaScript library with a big influence over the webdev world. Learn the basics of React in 100 Seconds",
    ID: "Tn6-PIqc4UM&t=4s",
    img: "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Rust in 100 Seconds",
    desc: "WRust is a memory-safe compiled programming language for building high-performance systems. It has the simplicity of high-level languages (Go, Python), but the control of low-level languages (C, Cpp)",
    ID: "5C_HPTJg5ek",
    img: "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Ruby in 100 Seconds",
    desc: "Ruby is a dynamic programming language most well-know for powering the Ruby on Rails fullstack web framework. Learn why developers love the simple object-oriented code produced by the Ruby language.",
    ID: "UYm0kfnRTJk",
    img: "https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Go in 100 Seconds",
    desc: "Learn the basics of the Go Programming Language. Go (not Golang) was developed at Google as a modern version of C for high-performance server-side applications. ",
    ID: "446E-r0rXHI",
    img: "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
]

const HomeScreen = () => {
  return (
    <>
      <NeuralNetwork />
      <SearchBox />
      <MotionConfig transition={{ duration: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Grid.Container gap={2} css={{ marginTop: 15 }}>
            {lectures.map((item) => (
              <VideoThumbNail key={item} title={item.title} desc={item.desc} ID={item.ID} img={item.img} />
            ))}
          </Grid.Container>
        </motion.div>
      </MotionConfig>
    </>
  );
};

export default HomeScreen;
