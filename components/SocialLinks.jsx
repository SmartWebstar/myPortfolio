import React from "react";

import { Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.gmail && (
        <Button
          className="btn-icon-only rounded-circle"
          color="instagram"
          href={socialLinks.gmail}
          target="_blank"
          rel="noopener"
          aria-label="Gmail"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-google" />
          </span>
        </Button>
      )}

      {socialLinks.telegram && (
        <Button
          className="btn-icon-only rounded-circle"
          color="facebook"
          href={socialLinks.telegram}
          target="_blank"
          rel="noopener"
          aria-label="Telegram"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-telegram" />
          </span>
        </Button>
      )}

      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-github" />
          </span>
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-linkedin" />
          </span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;