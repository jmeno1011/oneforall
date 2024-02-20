import { Link, useLocation } from "react-router-dom";
import Home from "../../../assets/Nav/home.svg?react";
import styles from "./Nav.module.css";
import { useState } from "react";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

export default function Nav() {
  const [accordionNav, setAccordionNav] = useState([
    {
      title: "overview",
      opened: true,
      children: [
        {
          name: "Home",
          link: "/",
        },
      ],
    },
    {
      title: "management",
      opened: true,
      children: [],
    },
  ]);

  const {pathname} = useLocation();
  const selectNavTitle = (title: string) => {
    setAccordionNav(
      accordionNav.map((v) =>
        v.title === title
          ? {
              ...v,
              opened: !v.opened,
            }
          : v
      )
    );
  };
  return (
    <div className={styles.container}>
      <nav>
        {accordionNav.map((nav) => (
          <div className={styles.navWrapper}>
            <h5
              className={styles.navTitle}
              onClick={() => selectNavTitle(nav.title)}
            >
              {nav.title}
            </h5>
            {nav.opened ? (
              <ul>
                {nav.children.map((child) => (
                  <li>
                    <Link to={child.link}>
                      <div className={cn('childrenTitle', child.link === pathname && 'childrenSelected')}>
                        <Home />
                        <span>{child.name}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </nav>
    </div>
  );
}
