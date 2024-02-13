import AuthLayout from "../../components/common/AuthLayout/AuthLayout"
import styles from "./Profile.module.css"

export default function Profile() {
  return (
    <AuthLayout>
      <header className={styles.container}>
        <h3>프로필</h3>
      </header>
    </AuthLayout>
  )
}
