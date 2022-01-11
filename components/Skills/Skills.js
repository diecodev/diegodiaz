import style from "styles/content.module.css";

const Skills = () => {
  return (
    <section className={style.skillsCtn}>
      <ul>
        <h3>Skills</h3>
        <li className={style.skill}>
          <h3>React</h3>
          <p>A JavaScipt library for building user interfaces.</p>
        </li>
        <li className={style.skill}>
          <h3>Next.js</h3>
          <p>The React Framework for SSR and SSG.</p>
        </li>
        <li className={style.skill}>
          <h3>Node,js</h3>
          <p>
            Backend JavaScript runtime environment that runs on the V8 engine
            and execute JavaScript code outside a web browser.
          </p>
        </li>
        <li className={style.skill}>
          <h3>Git</h3>
          <p>Software to tracking changes in any set of files.</p>
        </li>
        <li className={style.skill}>
          <h3>JavaScript</h3>
          <p>
            JavaScript can do everything related to webpage manipulation,
            interaction with the user and webserver.
          </p>
        </li>
        <li className={style.skill}>
          <h3>GitHub</h3>
          <p>
            Provider of internet hosting for software development and version
            control using git.
          </p>
        </li>
        <li className={style.skill}>
          <h3>Sass</h3>
          <p>
            A preprocessor scripting languagethat is interpreted or compiled
            into CSS.
          </p>
        </li>
        <li className={style.skill}>
          <h3>HTML5</h3>
          <p>The code that describes web pages.</p>
        </li>
        <li className={style.skill}>
          <h3>CSS3</h3>
          <p>Describes how HTML elements are to be displayed on screen.</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
