import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/common/AuthLayout/AuthLayout";
import styles from "./Login.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/auth";
import { userRowList } from "../../lib/user";
import { settingUserInfo } from "../../redux/features/user";

interface Iuser {
  id: string;
  pw: string;
}

export default function Login() {
  const [user, setUser] = useState<Iuser>({ id: "", pw: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userRowList.filter((info) => info.id === user.id).length !== 1) {
      alert("등록된 아이디가 아닙니다.");
    } else if (
      userRowList.filter((info) => info.id === user.id)[0].password !== user.pw
    ) {
      alert("비밀번호가 틀렸습니다.");
    } else {
      // alert(`id: ${user.id}\npw: ${user.pw}\n로그인 되었습니다.`);
      dispatch(settingUserInfo(userRowList.filter((info) => info.id === user.id)[0]))
      dispatch(login(user.id));
      navigate("/");
    }
  };

  const onClickForgotPWButton = () => {};

  return (
    <AuthLayout>
      <header className={styles.header}>
        <h3>로그인</h3>
      </header>
      <form className={styles.form} onSubmit={onSubmitLogin}>
        <input
          type="text"
          placeholder="아이디: test"
          required
          name="id"
          onChange={onChangeLoginInput}
          value={user.id}
        />
        <input
          type="password"
          placeholder="비밀번호: test"
          required
          name="pw"
          onChange={onChangeLoginInput}
          value={user.pw}
        />
        <button>로그인</button>
      </form>
      <div className={styles.formBottom}>
        <button onClick={onClickForgotPWButton}>
          <span>비밀번호 찾기</span>
        </button>
        <button>
          <Link to={"/join"}>
            <span>회원가입</span>
          </Link>
        </button>
      </div>
    </AuthLayout>
  );
}
