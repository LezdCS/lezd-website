
import Me from "../components/me/me";
import Project from "../components/project/project";
import classes from '../styles/index.module.scss'

const Home = () => {
  return (
    <div className={classes.home}>
      <Me />
      <h2>My projects</h2>
      <Project
        title={"IRL Link"}
        description={"IRL Link is a mobile application aiming to empower IRL live-streamers by providing them easy access to everything they need to manage and interact with their community. It is 100% open-source and have an user base growing everyday thanks to the support of reknowed streamers."}
        websiteUrl={"https://irllink.com"}
        githubUrl={"https://github.com/LezdCS/irl-link"}
      />
    </div>
  );
}
export default Home;
