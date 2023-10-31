import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/adil-el-alaoui/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/aelalaoui">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
