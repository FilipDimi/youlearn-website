import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import { Card, Text, Input, Button } from "@nextui-org/react";
import Header from "./Header";
import styles from "./SearchBox.module.css";

const YouTubeGetID = (url) => {
  var ID = "";
  url = url
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (url[2] !== undefined) {
    // eslint-disable-next-line
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }
  return ID;
};

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = () => {
    let videoID = YouTubeGetID(searchText);
    let path = `/lecture-url/${videoID}`;
    navigate(path);
  }

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        className={styles.mainContainer}
      >
          <Header />
          <div className={styles.searchCard}>
          <Card
            variant="bordered"
            css={{
              backgroundColor: "#16181A",
              marginTop: 50,
              opacity: 0.9,
              flex: 1,
            }}
          >
            <Card.Body>
              <Text color="#fff" size={24} css={{ marginTop: 3 }}>
                Find Lecture
              </Text>
              <Input
                labelPlaceholder="Paste YouTube Link"
                status="success"
                css={{ marginTop: 30 }}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button color="success" auto css={{ marginTop: 20 }} onPress={onSubmitHandler}>
                Learn
              </Button>
            </Card.Body>
          </Card>
          </div>
      </motion.div>
    </MotionConfig>
  );
};

export default SearchBox;
