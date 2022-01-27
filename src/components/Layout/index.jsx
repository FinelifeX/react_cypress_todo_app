import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>
          To Do Cypress App
        </h1>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          {children}
        </div>
      </main>
    </>
  )
}