import { ChangeEvent, FormEvent, useState } from "react";
import Camera from "../../../assets/create/camera.svg?react";
import styles from "./Create.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { settingUserRowlist } from "../../../redux/features/user";
import { IuserRowList } from "../../../types/user";

export default function Create() {
  const dispatch = useDispatch();
  const { userRowList } = useSelector((state: RootState) => state.user);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChangeUserInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userRowList?.filter((info) => info.id === user.id)) {
      alert("이미 등록된 아이디 입니다.");
    } else if (userRowList?.filter((info) => info.email === user.email)) {
      alert("이미 등록된 이메일 입니다.");
    } else if (user.password !== user.password2) {
      alert("비밀번호를 확인해주세요.");
    } else {
      const userinfo: IuserRowList = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      };
      if (userRowList) {
        dispatch(settingUserRowlist(userRowList?.concat(userinfo)));
      } else {
        dispatch(settingUserRowlist([userinfo]));
      }
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h3>Create a new user</h3>
      </header>
      <main className={styles.main}>
        <div className={styles.profilePhoto}>
          <label htmlFor="file-upload">
            <div className={styles.photoArea}>
              <div>
                <div>
                  <Camera />
                  <span>Upload photo</span>
                  <input type="file" name="file-upload" id="file-upload" />
                </div>
              </div>
            </div>
          </label>
          <div className={styles.photoAlert}>
            <p>max size of 3 B</p>
          </div>
        </div>
        <div className={styles.infoInput}>
          <form className={styles.form} onSubmit={onSubmitCreate}>
            <div className={styles.inputRow}>
              <label htmlFor="id">id</label>
              <input
                type="text"
                name="id"
                id="id"
                value={user.id}
                onChange={onChangeUserInfo}
              />
            </div>
            <div className={styles.inputRow}>
              <label htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={onChangeUserInfo}
              />
            </div>
            <div className={styles.inputRow}>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={onChangeUserInfo}
              />
            </div>
            <div className={styles.inputRow}>
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={onChangeUserInfo}
              />
            </div>
            <div className={styles.inputRow}>
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
                <span>create</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
