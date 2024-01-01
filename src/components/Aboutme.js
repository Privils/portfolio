import React from "react";
import { Link } from "react-router-dom";

const Aboutme = () => {
  return (
    <>
     <div class="wrapper wrapper1">
      <div class="box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      </div>
    </div>
      <div className="about">
        <div className="p-container">
          <p>
            Hi my name is <strong>Priviledge</strong> but you can call me
            <strong>Privils</strong>. I am currently 20 years old, living in
            <strong>
              <em>Cape Town, South Africa.</em>
            </strong>
            <br />
            At this moment in time I am currently building projects to improve
            my skills so u can see me as potential candidate for the role of
            junior frontend developer.
            <br />I am currently in Need of a huge jump start in my career, an
            <strong>internship, part-time job or full time</strong> can help me
            get started and gain the experince required to surve your company or
            any that I might be employed at in the future
          </p>
          <br />
          <p>
            I have not yet finshed my studies, As mention im only a junior
            frontend developer which means I still have to become a full fledged
            web developer
            <br />
            and even though I might make it till that my real Goal is to become
            a <span>softwarer engineer</span>
          </p>
          <br />
          <p>
            When it comes to working im no lazy person , I am very adaptive to
            change in inviroments, A fast leaner and panctual when it comes to
            showing up on time
          </p>
          <br />
          <p>
            Oh by the way here`s a link(
            <span className="link1">
              <Link href="https://github.com/Privils">Privls github acc</Link>
            </span>
            ) to my github repository so what u can view my latest and current
            projects and if you have any insights on how I can improve them
            please feel free to let me know.
          </p>
          <br />
        </div>
      </div>
    </>
  );
};

export default Aboutme;
