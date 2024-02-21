import { Outlet } from "react-router-dom";
import styles from "./Chart.module.css";

export default function Chart() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}
