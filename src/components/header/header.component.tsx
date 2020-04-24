import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SearchIcon from '@material-ui/icons/Search';

import { IHeader } from './header';
import Link from 'next/link';
import { Nav } from '../nav';

const Header: React.FunctionComponent<IHeader.IProps> = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='safe-area row header__container'>
        <div className='header__left row'>
          <div className='header__logo'>
            <Link href='/'>
              <a><img src='/images/logo.svg' alt='logo' /></a>
            </Link>
          </div>
          <Nav />
        </div>
        <div className='header__right row'>
          <div className='header__tools'>
            <IconButton aria-label='delete'>
              <SearchIcon />
            </IconButton>
            <IconButton aria-label='delete'>
              <BookmarkBorderIcon />
            </IconButton>
            <IconButton aria-label='delete'>
              <NotificationsNoneIcon />
            </IconButton>
          </div>
          <Link href='#'>
            <a className='nav__link header__link'>Войти</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
