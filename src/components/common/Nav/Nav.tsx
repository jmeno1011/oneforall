import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { useState } from "react";

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
  const selectNavTitle = (title: string)=>{
    const existTitle = accordionNav.filter(t => t.title === title);
    if(existTitle.length === 0){
      setAccordionNav(accordionNav.map(v => v.title === title ? ({
        ...v,
        opened: false
      }): v))
    }
  }
  return (
    <div className={styles.container}>
      <nav>
        {accordionNav.map((nav) => (
          <div className={styles.navWrapper}>
            <h5 className={styles.navTitle} onClick={()=>selectNavTitle(nav.title)}>{nav.title}</h5>
            <ul>
              {nav.children.map((child) => (
                <li>
                  <Link to={child.link}>
                    <div className={styles.childrenTitle}>
                      <span>{child.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
