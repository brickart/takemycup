import * as React from "react";

import { IHeader } from "./header";
import Link from "next/link";
import { Nav } from "../nav";
// import { IStore } from "../../app/core/store/IStore";
// import { useSelector, useDispatch } from "react-redux";
// import { ShoppingCartOutlined } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
// import Badge from '@material-ui/core/Badge';

const Header: React.FunctionComponent<IHeader.IProps> = (
  props
): JSX.Element => {
  // const cart = useSelector((state: IStore) => state.shop.cart);
  // const dispatch = useDispatch();

  return (
    <header>
      <div className="header">
        <div className="header-left">
          <div className="logo">
            <Link href="/">
              <a><img src="/logo/sportyvnyi.svg" alt="logo" /></a>
            </Link>
          </div>
          <Nav />
        </div>
        <div className="header-right">
          <div className="tools">
            <button className="btn btn--icon">
              <img src="/icons/search-24px.svg" alt="search" />
            </button>
            <button className="btn btn--icon">
              <img src="/icons/bookmark_border-24px.svg" alt="bookmark" />
            </button>
            <button className="btn btn--icon">
              <Icon>notifications</Icon>
              {/* <img src="/icons/notifications_none-24px.svg" alt="notifications" /> */}
            </button>
            
          </div>
          <a className="link" href="#">Войти</a>
        </div>
      </div>
    </header>
  );
};

export default Header
