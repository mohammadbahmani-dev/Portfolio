import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/bahmani20" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/mandegar20" target="_blank">
        <BsGithub />
      </a>
      <a href="https://facebook.com/mohammad.mandegar11" target="_blank">
        <FaFacebookF />
      </a>
    </div>
  );
};

export default HeaderSocials;
