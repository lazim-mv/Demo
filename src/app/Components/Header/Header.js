import { activeSection } from "@/utils/activeSection";
import styles from "../../styles/header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState(activeSection());
  const [productSection, setProductSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newActiveLink = activeSection();

      setActiveLink(newActiveLink);

      if (newActiveLink === "#products") {
        setProductSection(true);
      } else {
        setProductSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <headermain
      className={styles.headermain}
      id="mainBox"
      style={{ display: productSection ? "none" : "flex" }}
    >
      <div className={styles.logo}>
        <h1 className={styles.logoText}>LOGO</h1>
      </div>
      <div className={styles.menuItems}>
        <p className={styles.hederitem}>
          {activeLink === "#mainBox" || activeLink === null
            ? "Home"
            : activeLink === "#about"
            ? "About"
            : activeLink === "#products"
            ? "Products"
            : ""}
        </p>
        <p className={styles.hederitem}>Contact</p>
      </div>
    </headermain>
  );
}
