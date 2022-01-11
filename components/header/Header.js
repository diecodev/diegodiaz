import Navbar from "components/header/navbar/Navbar";
import style from "styles/header.module.css";
import Avatar from "components/Avatar/Avatar";
import Socialmedia from "./Socialmedia/Socialmedia";

const Header = () => {
  return (
    <>
      <main className={`${style.headerContainer}`}>
        <Navbar />
        <Avatar />
        <Socialmedia />
      </main>
      <div className={style.waveCtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2000"
          height="74"
          viewBox="0 0 2000 74"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M2000 33.7441L1888.33 28.1201C1778.33 22.4961 1555 11.248 1333.33 22.4961C1111.67 33.7441 888.333 67.4882 666.667 73.1122C445 78.7362 221.667 56.2402 111.667 44.9921L0 33.7441V3.32706e-06L111.667 3.32706e-06C221.667 3.32706e-06 445 3.32706e-06 666.667 3.32706e-06C888.333 3.32706e-06 1111.67 3.32706e-06 1333.33 3.32706e-06C1555 3.32706e-06 1778.33 3.32706e-06 1888.33 3.32706e-06L2000 3.32706e-06V33.7441Z"
            fill="#4C06ED"
          />
        </svg>
      </div>
    </>
  );
};

export default Header;
