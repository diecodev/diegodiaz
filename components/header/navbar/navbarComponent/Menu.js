import style from "styles/header.module.css";

const Menu = () => {
  const menuClicked = () => {
    const menu = document.getElementById("menu");
    const menuCtn = document.getElementById("menuCtn");
    menu.classList.toggle(`${style.menu}`);
    menuCtn.classList.toggle(`${style.reveal}`);
    const body = document.body;
    body.style.overflow == "hidden"
      ? (body.style = "")
      : (body.style.overflow = "hidden");
  };
  return (
    <nav>
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
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </section>
    </nav>
  );
};

export default Menu;
