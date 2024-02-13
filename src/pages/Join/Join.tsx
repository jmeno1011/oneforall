import { Link } from "react-router-dom";
import AuthLayout from "../../components/common/AuthLayout/AuthLayout";
import styles from "./Join.module.css";

export default function Join() {
  return (
    <AuthLayout>
      <header className={styles.header}>
        <h3>회원가입</h3>
      </header>
      <form className={styles.form}>
        <div className={styles.inputRow}>
          <label htmlFor="id">아이디</label>
          <input type="text" name="" id="id" required />
        </div>
        <div className={styles.inputRow}>
          <label htmlFor="pw">비밀번호</label>
          <input type="text" name="" id="pw" required />
        </div>
        <div className={styles.inputRow}>
          <label htmlFor="pw2">비밀번호 확인</label>
          <input type="text" name="" id="pw2" required />
        </div>
        <div className={styles.inputRow}>
          <label htmlFor="name">이름</label>
          <input type="text" name="" id="name" required />
        </div>
        <div className={styles.inputRow}>
          <label htmlFor="email">이메일</label>
          <input type="email" name="" id="email" required />
        </div>
        <button>가입하기</button>
        <div className={styles.formBottom}>
          <button>
            <Link to={"/login"}>
              <span>로그인</span>
            </Link>
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
