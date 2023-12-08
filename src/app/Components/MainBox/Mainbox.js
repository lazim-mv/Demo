import Image from "next/image";
import styles from "../../styles/mainbox.module.css";

function Mainbox() {
  return (
    <mainboxmain className={styles.mainboxmain} id="mainBox">
      <div className={styles.contentMainBox}>
        <h1>Elevate Home Security Standards.</h1>
        <p>
          Elevate Home Security Standards with our cutting-edge solutions. Our
          state-of-the-art surveillance systems, advanced access controls, and
          smart automation redefine safety. Experience peace of mind as we
          prioritize your security, providing round-the-clock monitoring and
          instant alerts. Our commitment to excellence ensures your home is
          fortified against potential threats, setting new benchmarks in
          residential protection. Trust us to safeguard what matters most – your
          family and your peace of mind.
        </p>
      </div>
      <div className={styles.mainBoxImage}>
        <Image
          quality={100}
          priority={true}
          unoptimized
          src="/cctv.webp"
          width={1212}
          height={600}
          objectFit="cover"
          layout="responsive"
          alt="aboutus1"
        />
      </div>
    </mainboxmain>
  );
}

export default Mainbox;
