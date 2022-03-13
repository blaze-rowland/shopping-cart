import { Container } from '../Container/Container.style';
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
      <Container>
        <NavSection>
          <NavLinkBrand to="/"></NavLinkBrand>
          <NavLink to="/">Products</NavLink>
        </NavSection>
        <NavSection>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/">Register</NavLink>
        </NavSection>
      </Container>
    </NavContainer>
  );
};
