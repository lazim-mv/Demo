import Link from "next/link";
import styles from "../../styles/sidebar.module.css";
import { useEffect, useState } from "react";
import { activeSection } from "@/utils/activeSection";
import HomeIcon from "@mui/icons-material/Home";
import { usePathname } from "next/navigation";
import Groups2Icon from "@mui/icons-material/Groups2";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(activeSection() || "#mainBox");
  console.log(activeLink,"allll")

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
          <Link href="#mainBox">
            <li className={activeLink === "#mainBox" ? "active" : ""}>
              <HomeIcon />
            </li>
          </Link>
        </div>
        <div className={styles.cursorLink}>
          <Link href="#about">
            <li className={activeLink === "#about" ? "active" : ""}>
              <Groups2Icon />
            </li>
          </Link>
        </div>
        <div className={styles.cursorLink}>
          <Link href="#products">
            <li className={activeLink === "#products" ? "active" : ""}>
              <Inventory2Icon />
            </li>
          </Link>
        </div>
        <div className={styles.cursorLink}>
          <Link href="#services">
          <li className={activeLink === "#services" ? "active" : ""}>
              <HomeRepairServiceIcon />
            </li>
          </Link>
        </div>
      </div>
    </sidebarmain>
  );
}

export default Sidebar;
