import { Outlet } from 'react-router'
import styles from "./User.module.css"

export default function User() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  )
}
