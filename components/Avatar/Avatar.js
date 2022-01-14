import Image from "next/image";
import style from "styles/header.module.css";
import source from "public/assets/avatar.png";
import Socialmedia from "components/header/Socialmedia/Socialmedia";

const Avatar = () => {
  return (
    <>
      <div className={style.avatarCtn}>
        <div className={style.avatar}>
          <Image src={source} placeholder="blur" alt="Diego Díaz avatar" />
        </div>
        <div>
          <span className={style.avatarInf}>
            <h3>
              Hi, I&apos;m <b>Diego</b> and
            </h3>
            <h4>I&apos;m a Frontend Developer</h4>
          </span>
          <Socialmedia />
        </div>
      </div>
    </>
  );
};

export default Avatar;
