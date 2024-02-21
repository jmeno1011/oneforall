import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>Profile</h3>
      </header>
      <main className={styles.main}>
        <h4 className={styles.title}>About</h4>
        <div className={styles.profileRow}>
          <label>name</label>
          <div>tono</div>
        </div>
        <div className={styles.profileRow}>
          <label>email</label>
          <div>whltn8282@gmail.com</div>
        </div>
        <div className={styles.btnArea}>
          <button className={styles.btn}>
            <Link to={"/user/edit"}>
              <span>Edit</span>
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}
