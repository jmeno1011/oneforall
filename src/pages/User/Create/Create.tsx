import styles from "./Create.module.css"

export default function Create() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>Create a new user</h3>
      </header>
      <main className={styles.main}>
        <div className={styles.profilePhoto}>

        </div>
        <div className={styles.infoInput}>

        </div>
      </main>
    </div>
  )
}