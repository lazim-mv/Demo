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
import Services from "./Services/Services";

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
          <div className={styles.mainScreen}>
            <Mainbox />
            <BottomCard />
          </div>
          <About />
          <Products />
          <Services />
        </div>
      </div>
    </>
  );
}

export default ComponentCombine;
