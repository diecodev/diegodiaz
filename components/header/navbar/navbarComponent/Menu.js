import style from "styles/header.module.css";

const Menu = () => {
  const menuClicked = () => {
    const menu = document.getElementById("menu");
    const menuCtn = document.getElementById("menuCtn");
    const body = document.body;

    menu.classList.toggle(`${style.menu}`);
    menuCtn.classList.toggle(`${style.reveal}`);

  };
  return (
    <>
      <div className={style.rotateContainer} onClick={menuClicked}>
        <svg
          id="menu"
          className={style.rotate}
          viewBox="0 0 33 33"
          width="32"
          height="32"
        >
          <g
            stroke="var(--white)"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M3 10 L29 10" />
            <path d="M3 22 L29 22" />
          </g>
        </svg>
      </div>
      <section id="menuCtn" className={style.menuContent}>
        <ul>
          <li><a onClick={menuClicked} href="#home">Home</a></li>
          <li><a onClick={menuClicked} href="#about">About</a></li>
          <li><a onClick={menuClicked} href="#skills">Skills</a></li>
          <li><a onClick={menuClicked} href="#projects">Projects</a></li>
          <li><a onClick={menuClicked} href="#contact">Contact</a></li>
        </ul>
      </section>
    </>
  );
};

export default Menu;
