import { FC } from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <div className={classes.Navbar}>
      <Link href={'/'}>LEZD</Link>
      <Link href={'#projects'}>Projects</Link>
    </div>
  );
}

export default Navbar
