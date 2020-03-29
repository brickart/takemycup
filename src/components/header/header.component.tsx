import * as React from "react";

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SearchIcon from '@material-ui/icons/Search';

import { IHeader } from "./header";
import Link from "next/link";
import { Nav } from "../nav";

const Header: React.FunctionComponent<IHeader.IProps> = (): JSX.Element => {
  return (
    <header className="header">
      <div className="safe-area row header__content">
        <div className="header-left row">
          <div className="logo">
            <Link href="/">
              <a><img src="/images/logo.svg" alt="logo" /></a>
            </Link>
          </div>
          <Nav />
        </div>
        <div className="header-right row">
          <div className="tools">
            <SearchIcon />
            <BookmarkBorderIcon />
            <NotificationsNoneIcon />
          </div>
          <a className="link" href="#">Войти</a>
        </div>
      </div>
    </header>
  );
};

export default Header
