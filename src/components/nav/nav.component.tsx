
import * as React from "react";
import Link from "next/link";

// import "./style.scss";

import { INav } from "./nav";

const LINKS: INavItemProps[] = [
  { id: '0', title: 'Главная', url: '/'},
  { id: '1', title: 'Каталог', url: '/products'},
  { id: '2', title: 'Категории', url: '/categories'},
  { id: '3', title: 'Статьи', url: '/#'},
  { id: '4', title: 'Вопросы', url: '/#'},
  { id: '5', title: 'Информация', url: '/#'},
];

const Nav: React.FunctionComponent<INav.IProps> = (
  props
): JSX.Element => {
  return (
    <div className="nav">
      {LINKS.map(NavItem)}
    </div>
  );
};

export { Nav };

// Todo: Replace Nav Item component to another file
interface INavItemProps {
  id: string;
  url: string;
  title: string;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({
  url, title, id
}): JSX.Element => {
  return (
    <Link href={url} key={id}>
      <a className="nav__link">{title}</a>
    </Link>
  );
};
