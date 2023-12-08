"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Reveal({
  children,
  width = "fit-content",
  height = "fit-content",
  animationSlideColor = false,
  slideDelay = 0.25,
  revealDelay= 0.25,
  positionTop="auto"
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", top:positionTop, width, height }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: revealDelay}}
      >
        {children}
      </motion.div>
      {animationSlideColor ? (
        ""
      ) : (
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn", delay: slideDelay }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "rgb(0, 66, 37, 0.3)",
            zIndex: 20,
          }}
        ></motion.div>
      )}
    </div>
  );
}

export default Reveal;
