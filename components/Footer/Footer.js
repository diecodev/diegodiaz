import { Icon } from "@iconify/react";
import style from "styles/footer.module.css";

const Footer = () => {
  return (
    <footer id="contact" className={style.footer}>
      <div className={style.waveCtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2000"
          height="139"
          viewBox="0 0 2000 139"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 107.812H83C167 107.812 333 107.813 500 118.056C667 128.299 833 148.785 1000 118.056C1167 87.3264 1333 5.38194 1500 0.26041C1667 -4.86112 1833 66.8403 1917 102.691L2000 138.542L1917 139C1833 139 1667 139 1500 139C1333 139 1167 139 1000 139C833 139 667 139 500 139C333 139 167 139 83 139H0V107.812Z"
            fill="var(--bg_primary)"
          />
        </svg>
      </div>
      <div className={style.content}>
        <h2>Wanna hire me?</h2>
        <a href="mailto:diegoddiaz05gmail.com">
          <Icon icon="fontisto:email" color="var(--bg_primary)" height="35" />
          Email me
        </a>
        <div>
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
            LinkedIn
          </a>
          <a
            href="https://github.com/apophthegm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="iconoir:github" color="white" height="28" />
            GitHub
          </a>
          <a
            href="http://instagram.com/diegodiazcol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="teenyicons:instagram-outline"
              color="white"
              height="28"
            />
            Instagram
          </a>
        </div>
        <p>Diego Díaz - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
