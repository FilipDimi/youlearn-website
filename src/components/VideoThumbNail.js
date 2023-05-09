import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Text, Grid } from "@nextui-org/react";
import styles from "./VideoThumbNail.module.css";

const VideoThumbNail = (props) => {
  const navigate = useNavigate();

  const RedirectHandler = () => {
    let path = `/lecture-url/${props.ID}`;
    navigate(path);
  };

  return (
    <Grid xs={12} md={6} lg={4} xl={3}>
      <Card
        onPress={RedirectHandler}
        isPressable
        isHoverable
        css={{
          backgroundColor: "#16181A",
          height: 300,
          opacity: 0.8,
          padding: 13,
          borderTopColor: "red",
          minHeight: 400
        }}
      >
        <Card.Header>
          <div className={styles.VHeaderContainer}>
            <img
              className={styles.headerImg}
              width="250"
              src={props.img}
              alt="Calculus II Antiderivatives"
            />
            <Text color="#fff" size={20}>
              {props.title}
            </Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Text color="#fff" css={{ textAlign: "justify" }}>
            {props.desc}
          </Text>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default VideoThumbNail;
