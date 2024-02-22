import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function Profile() {
  const {userInfo} = useSelector((state:RootState)=> state.user);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>Profile</h3>
      </header>
      <main className={styles.main}>
        <h4 className={styles.title}>About</h4>
        <div className={styles.profileRow}>
          <label>name</label>
          <div>{userInfo?.name}</div>
        </div>
        <div className={styles.profileRow}>
          <label>email</label>
          <div>{userInfo?.email}</div>
        </div>
        <div className={styles.btnArea}>
          <button className={styles.btn}>
            <Link to={"/user/edit"}>
              <span>edit</span>
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}
