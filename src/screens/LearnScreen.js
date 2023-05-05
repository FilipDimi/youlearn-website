import React from "react";
import { Grid, Collapse, Text, Radio, Button, Card } from "@nextui-org/react";
import styles from "./LearnScreen.module.css";

const LearnScreen = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
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
      </div>
      <div className={styles.div2}>
        <Grid.Container gap={2}>
          <Grid>
            <Collapse.Group shadow css={{ backgroundColor: "#16181A" }}>
              <Collapse title="Question 1">
                <Text css={{ color: "#fff" }}>
                  What is the indefinite integral of the function f(x) = 3x^2 -
                  6x + 5?
                </Text>
                <Radio.Group label="Answers" color="success">
                  <Radio value="A" size="sm">
                    <span style={{ color: "#fff" }}>x^3 - 3x^2 + 5x</span>
                  </Radio>
                  <Radio value="B" size="sm">
                    <span style={{ color: "#fff" }}>x^3 - 3x^2 + 5x + C</span>
                  </Radio>
                  <Radio value="C" size="sm">
                    <span style={{ color: "#fff" }}>3x^3 - 3x^2 + 5x</span>
                  </Radio>
                  <Radio value="D" size="sm">
                    <span style={{ color: "#fff" }}>3x^3 - 3x^2 + 5x + C</span>
                  </Radio>
                </Radio.Group>
                <Button color="success" auto bordered css={{marginTop: 15, width: "100%"}}>
                  Submit
                </Button>
              </Collapse>
            </Collapse.Group>
          </Grid>
        </Grid.Container>
      </div>
      <div className={styles.div3}>
        <Card css={{ backgroundColor: "#16181A", marginTop: 20}}>
            <h3>Short Answer</h3>
        </Card>
      </div>
    </div>
  );
};

export default LearnScreen;
