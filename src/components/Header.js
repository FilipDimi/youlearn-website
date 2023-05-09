import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "@nextui-org/react";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const RedirectHandler = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <header>
      <div className={styles.HContainer}>
        <img src={logo} alt="You Learn" className={styles.imgContainer} onClick={RedirectHandler}/>
        <div className={styles.VContainer}>
          <Text
        h1
        size={40}
        css={{
          textGradient: "45deg, $green100 -20%, $green800 50%",
        }}
        onClick={RedirectHandler}
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
