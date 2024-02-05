import React from "react";
import styles from "../../styles/services.module.css";
import serviceCTAs from "../../../Contents/Services";
import Image from "next/image";

const Services = () => {
  console.log(serviceCTAs ? serviceCTAs : "noservice");

  function handleClick() {
    console.log("click")
    window.location.href = "https://www.google.com";
  }

  return (
    <>
      <servicesmain className={styles.servicesMain} id="services">
        <h1>Services</h1>
        <div className={styles.cardContainer}>
          {serviceCTAs.map((data, index) => (
            <div onClick={handleClick} className={styles.singleCard} key={index}>
              <div className={styles.imgContainer}>
                <Image
                  src={data.img}
                  width={300}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <div className={styles.content}>
                <h1>{data.title}</h1>
                <hr />
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </servicesmain>
    </>
  );
};

export default Services;
