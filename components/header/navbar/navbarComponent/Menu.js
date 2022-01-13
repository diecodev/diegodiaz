import style from "styles/header.module.css";

const Menu = () => {
  let scroll = 0;

  const menuClicked = () => {
    const menu = document.getElementById("menu");
    const menuCtn = document.getElementById("menuCtn");
    const body = document.body;

    menu.classList.toggle(`${style.menu}`);
    menuCtn.classList.toggle(`${style.reveal}`);

    if (body.style.position === "fixed") {
      body.style = "";
      window.scroll(0, scroll);
    } else {
      scroll = window.scrollY;
      body.style.top = `-${scroll}px`;
      body.style.height = `calc(100% + ${scroll}px)`;
      body.style.position = "fixed";
    }
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
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </section>
    </>
  );
};

export default Menu;
