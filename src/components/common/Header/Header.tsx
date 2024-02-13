import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/auth";

export default function Header() {
  const dispatch = useDispatch();
  const onClickSignout = () => {
    dispatch(logout());
  };
  return (
    <header className={styles.container}>
      <div>
        <Link to={"/"}>
          <span>Home</span>
        </Link>
      </div>
      <div>
        <button onClick={onClickSignout} className={styles.signoutButton}>
          <span>Sign out</span>
        </button>
      </div>
    </header>
  );
}
