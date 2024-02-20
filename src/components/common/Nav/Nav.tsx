import { Link, useLocation } from "react-router-dom";
import Home from "../../../assets/Nav/home.svg?react";
import User from "../../../assets/Nav/user.svg?react";
import Down from "../../../assets/Nav/down.svg?react";
import styles from "./Nav.module.css";
import { ReactNode, useState } from "react";
import classNames from "classnames/bind";
const cn = classNames.bind(styles);

interface Iaccordion {
  title: string;
  opened: boolean;
  type: string;
  children: {
    title: string;
    link: string;
    icon: ReactNode;
    type: string;
    opened: boolean;
    openIcon?: ReactNode;
    child?: {
      title: string;
      link: string;
    }[];
  }[];
}

export default function Nav() {
  const [accordionNav, setAccordionNav] = useState<Iaccordion[]>([
    {
      title: "overview",
      opened: true,
      type: "title",
      children: [
        {
          title: "Home",
          link: "/",
          icon: <Home />,
          type: "nav",
          opened: true,
        },
      ],
    },
    {
      title: "management",
      opened: true,
      type: "title",
      children: [
        {
          title: "User",
          link: "/user",
          icon: <User />,
          type: "subTitle",
          openIcon: <Down />,
          opened: true,
          child: [
            {
              title: "Profile",
              link: "/user",
            },
            {
              title: "List",
              link: "/user/list",
            },
          ],
        },
      ],
    },
  ]);

  const { pathname } = useLocation();
  
  const selectNavTitle = (title: string, type: string) => {
    if (type === "title") {
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
    } else if (type === "subTitle") {
      setAccordionNav(
        accordionNav.map((v) => ({
          ...v,
          children: v.children.map((c) =>
            c.type === type && c.title === title
              ? {
                  ...c,
                  opened: !c.opened,
                }
              : c
          ),
        }))
      );
    }
  };
  return (
    <div className={styles.container}>
      <nav>
        {accordionNav.map((nav) => (
          <div className={styles.navWrapper} key={nav.title}>
            <h5
              className={styles.navTitle}
              onClick={() => selectNavTitle(nav.title, nav.type)}
            >
              {nav.title}
            </h5>
            {nav.opened ? (
              <ul>
                {nav.children.map((child) => (
                  <li key={child.title}>
                    <Link to={child.link}>
                      <div
                        className={cn(
                          "childrenTitle",
                          linkCheck(pathname, child.link)
                          // pathname.includes(child.link) && "childrenSelected"
                        )}
                        onClick={() => selectNavTitle(child.title, child.type)}
                      >
                        <div>
                          {child.icon}
                          <span>{child.title}</span>
                        </div>
                        <div
                          className={cn(
                            "subTitleIcon",
                            child.opened && "subTitleIconOpen"
                          )}
                        >
                          {child.type === "subTitle" ? child.openIcon : null}
                        </div>
                      </div>
                    </Link>
                    {child.opened
                      ? child.child?.map((ch) => (
                            <Link to={ch.link} key={ch.title}>
                              <div className={cn('child', ch.link === pathname && 'childSelected')}>
                                <span></span>
                                <span>{ch.title}</span>
                              </div>
                            </Link>
                        ))
                      : null}
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

function linkCheck(pathname: string, link:string){
  
  if(pathname === "/" && link === "/"){
    return "childrenSelected"
    
  }else if(link !== "/" && pathname.includes(link)){
    return "childrenSelected" 
  }
}