import Image from "next/image";
import styles from "./aside.module.css";
import logo from "./logo.png";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image src={logo} alt="logo da code connect" />
      {/*<img src="/logo.png" alt="logo da code connect" />*/}
    </aside>
  );
};
