import { Button } from '../../shared/styles/Button.style';
import {
  NavContainer,
  NavLinkBrand,
  NavSection,
  NavLink,
} from './Navigation.style';

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <NavContainer>
      <NavSection>
        <NavLinkBrand to="/"></NavLinkBrand>
        <NavLink to="/">Products</NavLink>
        <NavLink to="users">Users</NavLink>
      </NavSection>
      <NavSection>
        <Button>Login / Register</Button>
      </NavSection>
    </NavContainer>
  );
};
