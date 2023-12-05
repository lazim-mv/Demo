"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../styles/mainCombine.module.css";
import BottomCard from "./BottomBox/BottomCard";
import Header from "./Header/Header";
import Mainbox from "./MainBox/Mainbox";
import Sidebar from "./SideBar/Sidebar";

function ComponentCombine() {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mainScreen = document.querySelector(`.${styles.mainScreen}`);
    const mainScreenBottom = mainScreen.offsetTop + mainScreen.offsetHeight;

    if (scrollY > mainScreenBottom) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [scrollY, controls]);

  return (
    <main className={styles.Container}>
      <Header />
      <div className={styles.allignment}>
        <Sidebar />
        <div className={styles.col}>
          <div className={styles.mainScreen}>
            <Mainbox />
            <BottomCard />
          </div>
          <motion.div
            className={styles.About}
            animate={controls}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 1, // Set a higher z-index to stack on top
            }}
          >
            About
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default ComponentCombine;
