"use client";
import Image from "next/image";
import styles from "../../styles/bottomcard.module.css";
import { motion } from "framer-motion";
import RotateCube from "../RotatingCube/RotateCube";
import { useEffect, useState } from "react";

function BottomCard() {
  //   const images = [
  //     "/cctv1.webp",
  //     "/cctv2.webp",
  //     "/cctv1.webp",
  //     "/cctv3.webp",
  //     "/cctv4.webp",
  //     "/cctv.webp",
  //   ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const adImageIndices = [0, 1, 2, 3];

  return (
    <motion.bottomcardmain className={styles.bottomcardmain}>
      <div className={styles.bottomScroll}>
        <motion.div className={styles.btnContainer} variants={item}>
          <a className={styles.btn}>
            Products
            <Image
              src="/cctv.svg"
              layout="responsive"
              width={24}
              height={24}
              className={styles.bottomCardImage}
              objectFit="contain"
              objectPosition="center"
              alt="ImageFooter1"
              quality={100}
              loading="lazy"
              unoptimized
            />
          </a>
        </motion.div>
        {adImageIndices.map((index) => (
          <motion.div key={index}>
            <Image
              src={`/cctv${index + 1}.webp`}
              layout="responsive"
              width={109}
              height={100}
              className={styles.bottomCardImage}
              objectFit="contain"
              objectPosition="center"
              alt={`ImageFooter${index + 1}`}
              quality={100}
              loading="lazy"
              unoptimized
            />
          </motion.div>
        ))}
      </div>
    </motion.bottomcardmain>
  );
}

export default BottomCard;

{
  /* <div className={styles.cubeContainer}>
       <RotateCube imageSources={images} animationDuration={20}/>
      </div>
      <div className={styles.cubeContainer}>
       <RotateCube imageSources={images} animationDuration={30}/>
      </div>
      <div className={styles.btnContainer}>
        <a className={styles.btn}>Lorem ipsum dolor</a>
      </div>
      <div className={styles.cubeContainer}>
       <RotateCube imageSources={images} animationDuration={20}/>
      </div>
      <div className={styles.cubeContainer}>
       <RotateCube imageSources={images} animationDuration={30}/>
      </div> */
}
