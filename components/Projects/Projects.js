import Image from "next/image";
import { Icon } from "@iconify/react";
import style from "styles/content.module.css";
import { resources } from "resources/resources";
import { useState } from "react";

const Projects = () => {
  const [count, setCount] = useState(1);

  const handleClick1 = () => {
    if (count < 4 && count >= 1) {
      setCount((prev) => prev + 1);
    }
  };

  const handleClick = () => {
    if (count > 1 && count <= 4) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className={style.projectsCtn}>
      <h3>Projects</h3>
      <section>
        <button onClick={handleClick}>
          <Icon
            icon="ic:round-arrow-back-ios"
            color="var(--bg_primary)"
            height="32"
          />
        </button>
        <input
          className={style.hidden}
          type="radio"
          name="slide"
          id="slide1"
          checked={count === 1 ? true : false}
        />
        <input
          className={style.hidden}
          type="radio"
          name="slide"
          id="slide2"
          checked={count === 2 ? true : false}
        />
        <input
          className={style.hidden}
          type="radio"
          name="slide"
          id="slide3"
          checked={count === 3 ? true : false}
        />
        <input
          className={style.hidden}
          type="radio"
          name="slide"
          id="slide4"
          checked={count === 4 ? true : false}
        />
        <ul>
          {resources.map(({ id, imgDir, title, description, link }) => (
            <label
              key={id}
              htmlFor={`slide${id}`}
              className={id == 1 ? style.first : ""}
            >
              <li className={style.project}>
                <div>
                  <Image src={imgDir} placeholder="blur" />
                </div>
                <span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <button>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      Demo
                      <Icon icon="bi:arrow-left" height="22" rotate={2} />
                    </a>
                  </button>
                </span>
              </li>
            </label>
          ))}
        </ul>
        <button onClick={handleClick1}>
          <Icon
            icon="ic:round-arrow-back-ios"
            color="var(--bg_primary)"
            height="32"
            rotate={2}
          />
        </button>
      </section>
    </div>
  );
};

export default Projects;
