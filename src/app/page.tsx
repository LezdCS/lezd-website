import Me from "../components/me/me";
import Project from "../components/project/project";
import classes from "../styles/index.module.scss";
import react from "../../public/icons/react.svg";
import typescript from "../../public/icons/ts.svg";
import nextjs from "../../public/icons/nextjs.svg";
import flutter from "../../public/icons/flutter.svg";
import firebase from "../../public/icons/firebase.svg";
import android from "../../public/icons/android.svg";
import ios from "../../public/icons/ios.svg";
import nodejs from "../../public/icons/nodejs.svg";

const Home = () => {
  return (
    <div className={classes.home}>
      <Me />
      <div>
        <h2>My projects</h2>
        <br />
        <Project
          title={"IRL Link"}
          description={
            "IRL Link is a mobile application aiming to empower IRL live-streamers by providing them easy access to everything they need to manage and interact with their community. It is 100% open-source and have an user base growing everyday thanks to the support of reknowed streamers."
          }
          websiteUrl={"https://irllink.com"}
          githubUrl={"https://github.com/LezdCS/irl-link"}
          stacks={[
            {
              title: "Mobile App",
              icons: [flutter, firebase, android, ios],
            },
            {
              title: "Website & API",
              icons: [react, typescript, nextjs, nodejs],
            },
          ]}
        />
      </div>
    </div>
  );
};
export default Home;
