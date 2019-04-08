import React from 'react';
import { nav, nav__brand, nav__items } from './styles';

export const Nav = props => (
  <nav className={`${nav} ${props.className || ''}`} {...props}>
    {props.children}
  </nav>
);

export const NavBrand = props => (
  <aside className={`${nav__brand} ${props.className || ''}`} {...props}>
    {props.children}
  </aside>
);

export const NavItems = props => (
  <div className={`${nav__items} ${props.className || ''}`} {...props}>
    {props.children}
  </div>
);
