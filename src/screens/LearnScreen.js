import React from "react";
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

const calculusQuestions = [
  {
    question: "What is the integral of sin(x)?",
    A: "A) cos(x)",
    B: "B) -cos(x)",
    C: "C) sin(x)",
    D: "D) -sin(x)",
    correct: "B",
    feedback: "B) -cos(x)",
  },
  {
    question:
      "What is the area under the curve of y = x^2 from x = 0 to x = 2?",
    A: "A) 4/3",
    B: "B) 2",
    C: "C) 8/3",
    D: "D) 4",
    correct: "C",
    feedback: "C) 8/3",
  },
  {
    question:
      "What technique is commonly used to integrate functions involving products of sines and cosines?",
    A: "A) Integration by parts",
    B: "B) U-substitution",
    C: "C) Partial fractions",
    D: "D) Trigonometric substitution",
    correct: "A",
    feedback: "A) Integration by parts",
  },
  {
    question:
      "Which method is most appropriate for finding the volume of a solid generated by rotating the region bounded by y=x^2 and y=4 about the x-axis?",
    A: "A) Washer method",
    B: "B) Shell method",
    C: "C) Disk method",
    D: "D) Cylindrical shells",
    correct: "C",
    feedback: "C) Disk method",
  },
  {
    question:
      "What is the convergence test used for a series with terms that alternate in sign?",
    A: "A) Ratio test",
    B: "B) Root test",
    C: "C) Alternating series test",
    D: "D) Comparison test",
    correct: "C",
    feedback: "C) Alternating series test",
  },
  {
    question:
      "Which of the following is a proper definition of a convergent sequence?",
    A: "A) A sequence that approaches a finite limit as n approaches infinity",
    B: "B) A sequence that has no limit",
    C: "C) A sequence that approaches infinity as n approaches infinity",
    D: "D) A sequence that has no upper bound",
    correct: "A",
    feedback:
      "A) A sequence that approaches a finite limit as n approaches infinity",
  },
];

const LearnScreen = () => {
  const navigate = useNavigate();

  const RedirectHandler = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <>
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
              src="https://www.youtube.com/embed/M9W5Fn0_WAM?start=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
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
                  {calculusQuestions.map((item) => (
                    <QuestionContainer
                      question={item.question}
                      correct={item.correct}
                      A={item.A}
                      B={item.B}
                      C={item.C}
                      D={item.D}
                      feedback={item.feedback}
                    />
                  ))}
                  <QuestionContainer />
                </Collapse.Group>
              </Grid>
            </Grid.Container>
          </motion.div>
        </MotionConfig>
        <MotionConfig transition={{ duration: 1 }}>
          <motion.div
            className={styles.div3}
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
          >
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
                Find the arc length of the curve y = (1/3)x^3 from x = 0 to x =
                1.
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
          </motion.div>
        </MotionConfig>
      </div>
    </>
  );
};

export default LearnScreen;
