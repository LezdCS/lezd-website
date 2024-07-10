import Link from 'next/link';
import React, { FC } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import classes from './custom-button.module.scss'

interface CustomButtonProps {
  text: string,
  url: string,
  target?: string
}

const CustomButton: FC<CustomButtonProps> = (props) => {

  return (
    <Link href={props.url} className={`${classes.button} ${classes.mainButton}`} target={props.target}>
      <span>{props.text}</span><IoMdArrowForward />
    </Link>
  );
};

export default CustomButton;
