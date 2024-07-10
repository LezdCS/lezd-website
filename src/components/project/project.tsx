import { FC } from "react";
import classes from "./project.module.scss";
import Image from "next/image";
import mockup from "../../../public/mockup_prediction.png";
import CustomButton from "../custom-buttom/custom-button";
import StoreButtons from "../stores-buttons/store-buttons";
interface Props {
  title: string;
  description: string;
  websiteUrl: string;
  githubUrl: string;
}

const Project: FC<Props> = (props) => {
  return (
    <div className={classes.Project}>
      <div className={classes.Project_Text}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className={classes.Project_Buttons}>
          <CustomButton text="GitHub" url={props.githubUrl} target={'_blank'} />
          <CustomButton text="Website" url={props.websiteUrl} target={'_blank'} />
        </div>
        {/* <StoreButtons isFooter /> */}
        <div className={classes.Project_Stack}>
          <h4>Mobile App</h4>
          <h4>Website & API</h4>
        </div>
        <Image
          alt="GitHub Repo stars"
          src="https://img.shields.io/github/stars/LezdCS/irl-link"
          className={classes.Project_GithubStars}
          width={10}
          height={10}
        />
      </div>
      <Image
        alt={"Project image"}
        src={mockup}
        className={classes.Project_Image}
      />
    </div>
  );
};

export default Project;
