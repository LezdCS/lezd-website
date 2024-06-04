import { FC } from "react";
import classes from "./project.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string,
  description: string,
  websiteUrl: string,
  githubUrl: string,
}

const Project: FC<Props> = (props) => {
  return (
    <div className={classes.Project}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Image alt={''} src={''}></Image>
      <div>
        <Link href={props.githubUrl}>GitHub</Link>
        <Link href={props.websiteUrl}>Website</Link>
      </div>
    </div>
  );
}

export default Project
