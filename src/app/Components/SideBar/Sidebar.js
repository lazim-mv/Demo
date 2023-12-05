import styles from "../../styles/sidebar.module.css";

function Sidebar() {
  return (
    <sidebarmain className={styles.sidebarmain}>
      <div className={styles.sideBarShadow}>
          <div><li>Home</li></div>
          <div><li>About</li></div>
          <div><li>Products</li></div>
          <div><li>Services</li></div>
      </div>
    </sidebarmain>
  );
}

export default Sidebar;
