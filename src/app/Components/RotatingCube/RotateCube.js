// RotateCube.js

import Image from "next/image";
import styles from "../../styles/rotatecube.module.css";

function RotateCube({ imageSources, animationDuration }) {
    const animationStyle = {
        animation: `rotatecube_rotate__CyeKd ${animationDuration}s linear 0s infinite normal none running`,
    };
    
  return (
    <>
      <div className={styles.cube} style={animationStyle}>
        {imageSources.map((src, index) => (
          <div
            key={index}
            className={`${styles.box} ${styles[`box${index + 1}`]}`}
          >
            <Image
              src={src}
              layout="responsive"
              width={109}
              height={100}
              alt={`image ${index + 1}`}
              objectFit="contain"
              objectPosition="center"
              quality={100}
              loading="lazy"
              unoptimized
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default RotateCube;
