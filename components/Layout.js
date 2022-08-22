import styles from '../styles/utils.module.scss'

const Layout = ({ children }) => {
  return (
    <main className={styles.center}>{children}</main>
  )
}

export default Layout