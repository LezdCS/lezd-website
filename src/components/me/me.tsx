import { FC } from "react";
import classes from "./me.module.scss";
import CustomButton from "../custom-buttom/custom-button";
import Image from "next/image";
import me from "../../../public/me.jpg";
import steam from "../../../public/icons/steam.svg";
import mal from "../../../public/icons/mal.svg";

const Me: FC = () => {
  return (
    <div className={classes.Me}>
      <div className={classes.Me_Main}>
        <div className={classes.Me_Text}>
          <h3>Hey 👋 </h3>
          <p>
            I am <b>Julien</b>, a Full-Stack developer from France 🇫🇷 but living
            in Tokyo 🇯🇵.
          </p>
          <p>
            I spend most of my time with my friends or working on my projects :)
          </p>
          <p>
            Most of what I do is <b>open-source</b>!
          </p>
          <div className={classes.Me_Buttons}>
            <CustomButton
              text="Contact me"
              url="https://x.com/LezdCS"
              target="_blank"
            />
            <CustomButton text="My Projects" url="#projects" />
          </div>
        </div>
        <Image alt={"Julien's picture"} src={me} className={classes.Me_Image} />
      </div>

      <div className={classes.Me_Socials}>
        <a href="https://steamcommunity.com/id/Lezd/" target="_blank">
          <Image
            alt={"Steam logo"}
            src={steam}
            className={classes.Me_SocialIcon}
          />
        </a>
        <a href="https://myanimelist.net/profile/Lezd" target="_blank">
          <Image alt={"MAL logo"} src={mal} className={classes.Me_SocialIcon} />
        </a>
      </div>
    </div>
  );
};

export default Me;
