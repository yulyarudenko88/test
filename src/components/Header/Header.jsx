import { StyledHeader, Navigation, StyledNavLink } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Navigation>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/tweets">Tweets</StyledNavLink>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;