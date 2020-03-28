import * as React from "react";

import { IHeader } from "./header";
import Link from "next/link";
import { Nav } from "../nav";
// import { IStore } from "../../app/core/store/IStore";
// import { useSelector, useDispatch } from "react-redux";
// import { ShoppingCartOutlined } from '@material-ui/icons';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SearchIcon from '@material-ui/icons/Search';
// import Badge from '@material-ui/core/Badge';

const Header: React.FunctionComponent<IHeader.IProps> = (): JSX.Element => {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <div className="logo">
            <Link href="/">
              <a><img src="/images/logo.svg" alt="logo" /></a>
            </Link>
          </div>
          <Nav />
        </div>
        <div className="header-right">
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
