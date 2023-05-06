import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { Card, Text, Input, Button } from "@nextui-org/react";
import Header from "./Header";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
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
                labelPlaceholder="Search Box"
                status="success"
                css={{ marginTop: 30 }}
              />
              <Button color="success" auto css={{ marginTop: 20 }}>
                Search
              </Button>
            </Card.Body>
          </Card>
          </div>
      </motion.div>
    </MotionConfig>
  );
};

export default SearchBox;
