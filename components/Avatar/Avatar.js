import Image from "next/image";
import style from "styles/header.module.css";
import source from "public/assets/avatar.png";

const Avatar = () => {
  return (
    <>
      <div className={style.avatarCtn}>
        <div className={style.avatar}>
          <Image
            src={source}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            alt="Diego Díaz avatar"
          />
        </div>
        <span className={style.avatarInf}>
          <h3>
            Hi, I&apos;m <b>Diego</b> and
          </h3>
          <h4>I&apos;m a Frontend Developer</h4>
        </span>
      </div>
    </>
  );
};

export default Avatar;
