import style from "styles/header.module.css";
import { Icon } from "@iconify/react";

const Socialmedia = () => {
  return (
    <div className={style.socialmedia}>
      <a
        href="https://linkedin.com/in/diegodiazcol/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="simple-line-icons:social-linkedin"
          color="white"
          height="28"
        />
      </a>
      <a
        href="https://github.com/apophthegm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="iconoir:github" color="white" height="28" />
      </a>
      <a
        href="http://instagram.com/diegodiazcol"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="teenyicons:instagram-outline" color="white" height="28" />
      </a>
    </div>
  );
};

export default Socialmedia;
