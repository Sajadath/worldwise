import styles from "./SideBar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo></Logo>
      <AppNav></AppNav>
      <Outlet></Outlet>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; COPYRIGHT {new Date().getFullYear()} by WW INC
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
