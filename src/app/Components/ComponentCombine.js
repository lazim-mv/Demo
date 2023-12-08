"use client";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/mainCombine.module.css";
import BottomCard from "./BottomBox/BottomCard";
import Mainbox from "./MainBox/Mainbox";
import Sidebar from "./SideBar/Sidebar";
import Reveal from "./Reveal/Reveal";
import About from "./About/About";
import { motion, useScroll } from "framer-motion";
import Products from "./Products/Products";

function ComponentCombine() {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
  });

  return (
    <>
      <div className={styles.allignment} ref={element}>
        <Sidebar />
        <div className={styles.col}>
          <Reveal
            width="auto"
            animationSlideColor="true"
            height="100%"
            positionTop="90px"
          >
            <div className={styles.mainScreen}>
              <Mainbox />
              <BottomCard />
            </div>
          </Reveal>
          <Reveal
            width="auto"
            animationSlideColor="true"
            height="100%"
            positionTop="90px"
          >
            <About />
          </Reveal>
          <Reveal
            width="auto"
            animationSlideColor="true"
            height="100%"
            positionTop="150px"
          >
            <Products />
          </Reveal>
        </div>
      </div>
    </>
  );
}

export default ComponentCombine;
