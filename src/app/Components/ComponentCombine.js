"use client";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/mainCombine.module.css";
import BottomCard from "./BottomBox/BottomCard";
import Header from "./Header/Header";
import Mainbox from "./MainBox/Mainbox";
import Sidebar from "./SideBar/Sidebar";
import Reveal from "./Reveal/Reveal";
import About from "./About/About";

function ComponentCombine() {
  const element = useRef;

  return (
    <main className={styles.Container}>
      <Header />
      <div className={styles.allignment}>
        <Sidebar />
        <div className={styles.col}>
          <Reveal width="100%" height="100%" slideColor="true">
            <div className={styles.mainScreen}>
              <Mainbox />
              <BottomCard />
            </div>
          </Reveal>
          <Reveal width="100%">
            <div className={styles.aboutScreen}>
              <About />
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}

export default ComponentCombine;
