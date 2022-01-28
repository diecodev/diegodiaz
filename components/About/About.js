import style from "styles/content.module.css";

const About = () => {
  return (
    <section id="about" className={style.section}>
      <div>
        <h3>About</h3>
        <p>
          I am a self-taught developer, I love everything relatedto JavaScript
          and I always strive to learn quickly, efficiently and without wasting
          time.
          <br />
          <br />I am Colombian and I am currently studiying at the University of
          Magdalena the career of Fisheries Engineering, although I remain doing
          personal projects and improving my skills every day. Currently I want
          to belong to a team that gives methe necessary tools to live what I
          love the most, coding!
        </p>
      </div>
    </section>
  );
};

export default About;
