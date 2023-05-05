import React from "react";
import { Text } from "@nextui-org/react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className={styles.HContainer}>
        <img src={logo} alt="You Learn" style={{ width: 150 }} />
        <div className={styles.VContainer}>
          <Text
        h1
        size={40}
        css={{
          textGradient: "45deg, $green100 -20%, $green800 50%",
        }}
      >
        You Learn
      </Text>
          <p>LEARN DIFFERENT</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
