import Image from "next/image";
import styles from "../../styles/mainbox.module.css";

function Mainbox() {
  return (
    <mainboxmain className={styles.mainboxmain}>
      <div className={styles.contentMainBox} id="mainBox">
        <h1>Lorem Ipsum tor Portodor</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Auctor vel erat dignissim
          tincidunt amet. Amet placerat faucibus nunc pellentesque ultrices.
          Enim gravida et ut etiam. Suspendisse nulla enim dis sed purus.
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
