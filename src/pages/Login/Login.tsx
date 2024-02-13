import { Link } from "react-router-dom";
import AuthLayout from "../../components/common/AuthLayout/AuthLayout";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <AuthLayout>
      <header className={styles.header}>
        <h3>로그인</h3>
      </header>
      <form className={styles.form}>
        <input type="text" name="" id="" />
        <input type="password" name="" id="" />
        <button>로그인</button>
        <div className={styles.formBottom}>
          <button>
            <span>비밀번호 찾기</span>
          </button>
          <button>
            <Link to={"/join"}>
              <span>회원가입</span>
            </Link>
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
