import { FC } from "react";
import classes from "./project.module.scss";
import Image from "next/image";
import Link from "next/link";
import mockup from "../../../public/mockup_prediction.png";

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
        <div>
          <Link href={props.githubUrl} target={"_blank"}>
            GitHub
          </Link>
          <Link href={props.websiteUrl} target={"_blank"}>
            Website
          </Link>
        </div>
      </div>
      <Image alt={"Project image"} src={mockup} />
    </div>
  );
};

export default Project;
