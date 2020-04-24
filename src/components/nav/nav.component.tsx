
import * as React from 'react';
import Link from 'next/link';

import { INav } from './nav';

const LINKS: INavItemProps[] = [
  { id: '0', title: 'Главная', url: '/'},
  { id: '3', title: 'Статьи', url: '/articles'},
  { id: '2', title: 'Новости', url: '/news'},
  { id: '4', title: 'Вопросы', url: '/#'},
  { id: '5', title: 'Рецепты', url: '/#'},
];

const Nav: React.FunctionComponent<INav.IProps> = (): JSX.Element => {
  return (
    <div className='nav'>
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
  url, title, id,
}): JSX.Element => {
  return (
    <Link href={url} key={id}>
      <a className='nav__link'>{title}</a>
    </Link>
  );
};
