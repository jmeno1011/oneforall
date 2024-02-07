import styles from "./AuthLayout.module.css";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className={styles.container}>{children}</div>;
}
