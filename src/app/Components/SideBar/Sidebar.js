import Link from "next/link";
import styles from "../../styles/sidebar.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { activeSection } from "@/utils/activeSection";


function Sidebar() {
  const [activeLink, setActiveLink] = useState(activeSection());
  console.log(activeLink,"imagePath")

  useEffect(() => {
    const handleScroll = () => {
      setActiveLink(activeSection());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <sidebarmain className={styles.sidebarmain}>
      <div className={styles.sideBarShadow}>
        <div className={styles.cursorLink}>
          <Link href="#mainBox" >
            <li className={activeLink === "#mainBox" ? "active": ""}>Home</li>
          </Link>
        </div>
        <div className={styles.cursorLink}>
          <Link href="#about">
            <li  className={activeLink === "#about" ? "active": ""}>About</li>
          </Link>
        </div>
        <div className={styles.cursorLink}>
          <Link href="#products">
            <li className={activeLink === "#products" ? "active": ""}>Products</li>
          </Link>
        </div>
        <div className={styles.cursorLink}>
          <Link href="">
            <li>Services</li>
          </Link>
        </div>
      </div>
    </sidebarmain>
  );
}

export default Sidebar;
