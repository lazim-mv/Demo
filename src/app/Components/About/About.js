import React from "react";
import styles from "../../styles/About.module.css";
import Reveal from "../Reveal/Reveal";

function About() {
  return (
    <>
      <div className="idContainer" id="about"></div>

      <aboutmain className={styles.aboutmain}>
        <div className={styles.scrollContainer}>
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            {/* </Reveal> */}
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              magni, saepe, atque est minus cumque magnam nesciunt ducimus
              asperiores eligendi a recusandae. Veritatis nam quidem alias,
              asperiores voluptas laudantium reiciendis laboriosam deleniti vel
              nihil non officiis tenetur dolor necessitatibus vero quos
              aspernatur fugiat esse autem! Ab blanditiis possimus reiciendis?
              Veritatis, voluptatem explicabo numquam suscipit quidem quisquam
              laboriosam, culpa obcaecati repellat, possimus dolore. Suscipit in
              cupiditate voluptate, aliquid sequi tempore rerum neque ipsum
              laudantium, quidem nesciunt fugiat nisi nihil odio sunt?
            </p>
          </div>
        </div>
      </aboutmain>
    </>
  );
}

export default About;
