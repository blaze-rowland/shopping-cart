import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/logo.svg';
import { Container } from '../Container/Container.style';

export const NavContainer = styled.nav`
  background-color: var(--color-white);
  box-shadow: 0 2px 10px -6px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  height: var(--height-nav);
  padding: 0 var(--padding-x);
  position: sticky;
  top: 0;
  z-index: var(--z-index-nav);
`;

export const NavSection = styled.div`
  align-items: center;
  display: flex;
`;

export const NavLink = styled(Link)`
  color: rgba(0, 0, 0, 0.78);
  font-size: 1.1em;
  font-weight: 500;
  text-decoration: none;

  &:not(:last-of-type) {
    margin-right: 1em;
  }
`;

export const NavLinkBrand = styled(Link)`
  background-image: url(${logo});
  background-size: contain;
  margin-right: 1.5em;
  height: 5em;
  width: 5em;
`;
