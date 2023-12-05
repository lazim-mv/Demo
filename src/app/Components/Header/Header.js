import styles from '../../styles/header.module.css'

export default function Header() {
  return (
    <headermain className={styles.headermain}>
      <div className={styles.logo}>
        <h1 className={styles.logoText}>LOGO</h1>
      </div>
      <div className={styles.menuItems}>
        <p className={styles.hederitem}>Home</p>
        <p className={styles.hederitem}>Contact</p>
      </div>
    </headermain>
  )
}
