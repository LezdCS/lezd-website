'use client';

import React, { FC } from 'react';
import classes from './store-button.module.scss'
import Image from 'next/image'
import googleBadge from '../../../public/google-play-badge.png'
import iosBadge from '../../../public/app-store-badge.svg'
import classNames from 'classnames';

interface StoreButtonsProps {
  isFooter?: boolean
}

const StoreButtons: FC<StoreButtonsProps> = ({ isFooter }) => {

  const GoogleBadgeClasses = classNames({
    [classes.GoogleBadge]: true,
    [classes.GoogleBadge__Footer]: isFooter,
  })

  const AppStoreBadgeClasses = classNames({
    [classes.AppStoreBadge]: true,
    [classes.AppStoreBadge__Footer]: isFooter,
  })

  return (
    <div className={classes.StoreButtons}>
      <a href="https://play.google.com/store/apps/details?id=dev.lezd.www.irllink" target='_blank'>
        <Image
          src={googleBadge}
          width={279}
          height={108}
          alt="Google store badge"
          className={GoogleBadgeClasses}
        />
      </a>
      <a href="https://apps.apple.com/us/app/irl-link/id6447156883" target='_blank'>
        <Image
          src={iosBadge}
          width={245}
          height={74}
          alt="iOS store badge"
          className={AppStoreBadgeClasses}
        />
      </a>
    </div>
  );
};

export default StoreButtons;
