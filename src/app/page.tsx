'use client'

import Me from "./components/me/me";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <div className={classes.Page}>
      <Me />
    </div>
  );
}
