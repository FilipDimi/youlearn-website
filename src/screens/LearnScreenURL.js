import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Collapse,
  Card,
  Text,
  Textarea,
  Button,
} from "@nextui-org/react";
import { motion, MotionConfig } from "framer-motion";
import styles from "./LearnScreen.module.css";
import QuestionContainer from "../components/QuestionContainer";
import NeuralNetwork from "../components/NeuralNetwork";
import Header from "../components/Header";
import logo from "../assets/logo.png";

const BASE_URL = "https://learn-ai-385203.uk.r.appspot.com/url";

const YouTubeGetID = (url) => {
  var ID = '';
  url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    // eslint-disable-next-line
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  }
  else {
    ID = url;
  }
    return ID;
}

const LearnScreenURL = () => {
  const [multipleQ, setMultipleQ] = useState([]);
  const [shortAnswer, setshortAnswer] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const videoUrl = localStorage.getItem("video-url");
  const videoID = YouTubeGetID(videoUrl);

  const RedirectHandler = () => {
    let path = "/";
    navigate(path);
  };

  axios
    .post(BASE_URL, { url: videoUrl })
    .then((response) => {
      const msq = Object.keys(response.data.mcq).map((key) => {
        return response.data.mcq[key];
      });
      const sa = Object.keys(response.data.shortanswer).map((key) => {
        return response.data.shortanswer[key];
      });
      setLoading(false);
      setMultipleQ(msq);
      setshortAnswer(sa);
    })
    .catch((error) => {
      console.log(error);
    });

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className={styles.rotateImage} src={logo} alt="You Learn" />
        <h5>This might take a while</h5>
        <h6>We appreciate your patience</h6>
      </div>
    );
  } else {
    return (
      <>
        <Header />
        <NeuralNetwork />
        <MotionConfig transition={{ duration: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button shadow color="success" auto onPress={RedirectHandler}>
              Go Back
            </Button>
          </motion.div>
        </MotionConfig>
        <div className={styles.parent}>
          <MotionConfig transition={{ duration: 1 }}>
            <motion.div
              className={styles.div1}
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <iframe
                style={{ borderRadius: 20 }}
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoID}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </motion.div>
          </MotionConfig>
          <MotionConfig transition={{ duration: 1 }}>
            <motion.div
              className={styles.div3}
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {shortAnswer.map(item => (
                <Card
                  css={{
                    backgroundColor: "#16181A",
                    marginTop: 20,
                    padding: 20,
                    opacity: 0.85,
                  }}
                >
                  <h3>Short Answer</h3>
                  <Text color="#fff" size={18} css={{ marginTop: 10 }}>
                    { item.prompt }
                  </Text>
                  <Textarea
                    labelPlaceholder="Answer"
                    status="success"
                    css={{
                      opacity: 0.8,
                      color: "#000",
                      marginTop: 18,
                      marginBottom: 15,
                    }}
                  />
                  <Button color="success" auto>
                    Submit
                  </Button>
                </Card>
              ))}
            </motion.div>
          </MotionConfig>
          <MotionConfig transition={{ duration: 1 }}>
            <motion.div
              className={styles.div2}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Grid.Container gap={1} css={{ marginTop: -10 }}>
                <Grid>
                  <Collapse.Group
                    shadow
                    css={{ backgroundColor: "#16181A", opacity: 0.85 }}
                  >
                    {multipleQ.map((item) => (
                      <QuestionContainer
                        question={item.question}
                        correct={item.correct}
                        A={item.A}
                        B={item.B}
                        C={item.C}
                        D={item.D}
                        feedback={item.correct}
                        key={item.question}
                      />
                    ))}
                    <QuestionContainer />
                  </Collapse.Group>
                </Grid>
              </Grid.Container>
            </motion.div>
          </MotionConfig>
        </div>
      </>
    );
  }
};

export default LearnScreenURL;
