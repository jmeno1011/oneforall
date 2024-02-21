import styles from "./Edit.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Edit() {
  const [user, setUser] = useState({
    name: "tono",
    email: "whltn8282@gmail.com",
    password: "test",
    password2: "",
  });

  const onChangeUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitSave = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(user.password !== user.password2){
      alert("비밀번호를 확인해주세요.");
    }else{
      alert("정보가 변경되었습니다!")
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>Edit</h3>
      </header>
      <form className={styles.main} onSubmit={onSubmitSave}>
        <h4 className={styles.title}>Account Setting</h4>
        <div className={styles.editRow}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={onChangeUserInfo}
          />
        </div>
        <div className={styles.editRow}>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={onChangeUserInfo}
          />
        </div>
        <div className={styles.editRow}>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={onChangeUserInfo}
          />
        </div>
        <div className={styles.editRow}>
          <label htmlFor="password2">password confirm</label>
          <input
            type="password"
            name="password2"
            id="password2"
            value={user.password2}
            onChange={onChangeUserInfo}
          />
        </div>
        <div className={styles.btnArea}>
          <button className={styles.btn}>
            <span>save</span>
          </button>
        </div>
      </form>
    </div>
  );
}
