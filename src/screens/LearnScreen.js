import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import { FlashcardArray } from "react-quizlet-flashcard";
import styles from "./LearnScreen.module.css";
import { Card, Text, Textarea, Button } from "@nextui-org/react";

import NeuralNetwork from "../components/NeuralNetwork";
import QuestionContainer from "../components/QuestionContainer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import logo from "../assets/logo.png";

const BASE_URL = "https://learn-ai-385203.uk.r.appspot.com/url";

const LearnScreen = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { vidID } = useParams();
  const [video, setVideo] = useState(null);
  const [mcqOrder, setMcqOrder] = useState(0);
  const [answerOrder, setAnswerOrder] = useState(0);
  let cards = [];

  const prevMcq = () => {
    if (mcqOrder > 0) {
      setMcqOrder(mcqOrder - 1);
    }
  };

  const nextMcq = () => {
    if (mcqOrder < video.mcq.length - 1) {
      setMcqOrder(mcqOrder + 1);
    }
  };

  const prevAnswer = () => {
    if (answerOrder > 0) {
      setAnswerOrder(answerOrder - 1);
    }
  };

  const nextAnswer = () => {
    if (answerOrder < video.shortanswer.length - 1) {
      setAnswerOrder(answerOrder + 1);
    }
  };

  useEffect(() => {
    setScreenWidth(screenWidth);
  }, [screenWidth]);

  useEffect(() => {
    axios
      .post(BASE_URL, { url: `https://www.youtube.com/watch?v=${vidID}` })
      .then((resp) => {
        setVideo(resp.data);
      });
    // eslint-disable-next-line
  }, []);

  if (video) {
    if (video) {
      for (let i = 0; i < video.flashcards.length; i++) {
        cards.push({
          id: i,
          front: video.flashcards[i].front,
          back: video.flashcards[i].back,
          frontHTML: video.flashcards[i].front,
          frontContentStyle: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#16181A",
            color: "#fff",
            padding: 30,
          },
          backHTML: video.flashcards[i].back,
          backContentStyle: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#16181A",
            color: "#fff",
            padding: 30,
          },
        });
      }
    }
  }

  if (!video) {
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
  }
  console.log(video);
  console.log(mcqOrder);
  return (
    <>
      <Header />
      <NeuralNetwork />
      <div className={styles.main}>
        <div className={styles.mainVContainer}>
          <div className={styles.firstHContainer}>
            {screenWidth > 850 ? (
              <YouTube
                videoId={vidID}
                opts={{ width: 800, height: 500, borderRadius: 30 }}
              />
            ) : (
              <YouTube videoId={vidID} opts={{ width: 300, height: 200 }} />
            )}

            <div className={styles.transriptDiv}>
              <h3 style={{ marginBottom: 30 }}>Summary</h3>
              <p style={{ color: "white", textAlign: "justify" }}>
                {video.summary}
              </p>
            </div>
          </div>
          <div className={styles.secondHContainer}>
            <Card
              style={{
                backgroundColor: "#16181A",
                padding: 50,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h4 style={{marginTop: -30, marginBottom: 30}}>Multiple Choice ({mcqOrder+1}/{video.mcq.length})</h4>
              <QuestionContainer
                question={video.mcq[mcqOrder].question}
                A={video.mcq[mcqOrder].A}
                B={video.mcq[mcqOrder].B}
                C={video.mcq[mcqOrder].C}
                D={video.mcq[mcqOrder].D}
                correct={video.mcq[mcqOrder].correct}
                feedback={video.mcq[mcqOrder].correct}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 25,
                }}
              >
                <Button color="accent" onPress={prevMcq}>
                  Prev
                </Button>
                <Button color="success" onPress={nextMcq}>
                  Next
                </Button>
              </div>
            </Card>
            <div style={{ backgroundColor: "#16B35B", borderRadius: 20 }}>
              <FlashcardArray cards={cards} />
            </div>
            <Card
              css={{
                backgroundColor: "#16181A",
                padding: 20,
                opacity: 0.85,
              }}
            >
              <h4>Short Answer ({answerOrder+1}/{video.shortanswer.length})</h4>
              <Text color="#fff" size={18} css={{ marginTop: 10 }}>
                {video.shortanswer[answerOrder].prompt}
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 25,
                }}
              >
                <Button color="accent" onPress={prevAnswer}>
                  Prev
                </Button>
                <Button color="success" onPress={nextAnswer}>
                  Next
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnScreen;
