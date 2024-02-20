import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/features/auth";
import Profile from "../../../assets/header/person.svg?react";
import { RootState } from "../../../redux/store";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userID } = useSelector((state: RootState) => state.auth);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const onClickOpenProfile = () => {
    setOpenProfile(!openProfile);
  };

  const onClickProfileLink = () => {
    setOpenProfile(false);
    navigate("/user");
  };

  const onClickSignout = () => {
    dispatch(logout());
  };

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      profileRef.current &&
      target &&
      target.contains(profileRef.current) &&
      !profileRef.current.contains(target)
    ) {
      setOpenProfile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [profileRef]);

  return (
    <header className={styles.container}>
      <div>
        <Link to={"/"}>
          <span>Home</span>
        </Link>
      </div>
      <div className={styles.headerButton}>
        <button className={styles.profileButton} onClick={onClickOpenProfile}>
          <Profile />
        </button>
        <button onClick={onClickSignout} className={styles.signoutButton}>
          <span>Sign out</span>
        </button>
        {openProfile ? (
          <div className={styles.smallProfile} ref={profileRef}>
            <h5>
              아이디: <span>{userID}</span>
            </h5>
            <div className={styles.smallProfileBottom}>
              <button onClick={onClickProfileLink}>
                <span>프로필</span>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
