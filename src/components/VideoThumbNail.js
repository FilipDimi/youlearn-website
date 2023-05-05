import React from "react";
import { Card, Text, Grid } from "@nextui-org/react";
import styles from "./VideoThumbNail.module.css";

const VideoThumbNail = () => {
  return (
    <Grid xs={12} md={6} lg={4} xl={3}>
      <Card
        isPressable
        isHoverable
        css={{ backgroundColor: "#16181A", height: 300, opacity: 0.8, padding: 10, borderTopColor: 'red' }}
      >
        <Card.Header>
          <div className={styles.VHeaderContainer}>
            <img
              className={styles.headerImg}
              width="250"
              src="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Calculus II Antiderivatives"
            />
            <Text color="#fff" size={20}>
              Calculus II Antiderivatives
            </Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Text color="#fff" css={{textAlign: 'justify'}}>
            Calculus II: Integrals and Applications" is a comprehensive video
            that covers techniques for evaluating integrals, applications of
            integration, and infinite series. Learn to solve challenging
            calculus problems and gain a deeper understanding of the fundamental
            concepts of calculus.
            Calculus II: Integrals and Applications" is a comprehensive video
            that covers techniques for evaluating integrals, applications of
            integration, and infinite series. Learn to solve challenging
            calculus problems and gain a deeper understanding of the fundamental
            concepts of calculus.
          </Text>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default VideoThumbNail;
