import { FC } from "react";
import classes from "./me.module.scss";
import Link from "next/link";

const Me: FC = () => {
  return (
    <div className={classes.Me}>
      <h3>Hey 👋 </h3>
      <p>I am Julien, a French Full-Stack developer from France 🇫🇷 and I live in Tokyo 🇯🇵.</p>
      <p>I spend most of my time with friends or working on my projects :)</p>
      <div>
        <Link href={''} >Contact me</Link>
        <Link href={''} >My Projects</Link>
      </div>
    </div>
  );
}

export default Me
