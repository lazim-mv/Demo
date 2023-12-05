import Link from "next/link";
import styles from "../../styles/sidebar.module.css";

function Sidebar() {
  return (
    <sidebarmain className={styles.sidebarmain}>
      <div className={styles.sideBarShadow}>
          <div><Link href=""><li>Home</li></Link></div>
          <div><Link href=""><li>About</li></Link></div>
          <div><Link href=""><li>Products</li></Link></div>
          <div><Link href=""><li>Services</li></Link></div>
      </div>
    </sidebarmain>
  );
}

export default Sidebar;
