import { FC } from "react";
import classes from "./project.module.scss";
import Image, { StaticImageData } from "next/image";
import mockup from "../../../public/mockup_prediction.png";
import CustomButton from "../custom-buttom/custom-button";
import StoreButtons from "../stores-buttons/store-buttons";
interface Props {
  title: string;
  description: string;
  websiteUrl: string;
  githubUrl: string;
  stacks: Stack[];
}

interface Stack {
  title: string,
  icons: StaticImageData[]
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
        <div className={classes.Project_Stacks}>
          {props.stacks.map((stack, index) => (
            <div key={index} className={classes.Project_Stack}>
              <h4>{stack.title}</h4>
              <div className={classes.Project_Stack_Icons}>
                {stack.icons.map((icon, index) => (
                  <Image
                    key={index}
                    alt={stack.title}
                    src={icon}
                    width={30}
                    height={30}
                  />
                ))}
              </div>
            </div>
          ))}
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
