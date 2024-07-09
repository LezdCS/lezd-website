import { FC } from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className={classes.Navbar}>
      <Link href={'/'}><h1>Lezd</h1></Link>
    </div>
  );
}

export default Navbar
