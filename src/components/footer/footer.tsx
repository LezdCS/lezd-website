import { FC } from "react";
import classes from "./footer.module.scss";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <div className={classes.Footer}>
      <Image alt={''} src={''}></Image>
      <p>Lezd © 2024</p>
      <div className={classes.Footer__Contacts}></div>
    </div>
  );
}

export default Footer
