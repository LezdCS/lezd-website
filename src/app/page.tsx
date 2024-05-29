import classes from "./page.module.scss";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className={classes.Page}>
      <NextSeo
        title="Home Page Title"
        description="Home page description of the page"
      />
      
    </div>
  );
}
