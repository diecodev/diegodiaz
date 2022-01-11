import Menu from "./navbarComponent/Menu";
import style from "styles/header.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link href="/">
          <a>
            <h2 className={style.logo}>
              Diego<span className={style.logospan}>.dev</span>
            </h2>
          </a>
        </Link>
        <div>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
