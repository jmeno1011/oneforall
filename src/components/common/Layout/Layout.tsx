import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
export default function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}
