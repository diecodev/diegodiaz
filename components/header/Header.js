import Navbar from "components/navbar/Navbar";
import style from "styles/header.module.css";
import Source from "public/assets/wave.png";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <main className={`${style.headerContainer}`}>
        <Navbar />
      </main>
      <Image src={Source} priority />
    </>
  );
};

export default Header;
