'use client'

import Me from "./components/me/me";
import Project from "./components/project/project";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <div className={classes.Page}>
      <Me />
      <Project
        title={"IRL Link"}
        description={"IRL Link is a mobile application aiming to empower IRL live-streamers by providing them easy access to everything they need to manage and interact with their community. It is 100% open-source and have an user base growing everyday thanks to the support of reknowed streamers."}
        websiteUrl={"/"}
        githubUrl={"/"}
      />
    </div>
  );
}
