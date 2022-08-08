import { useContext } from "react";
import {
  ButtonDarkLight,
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart, Sun, Moon } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

import { ThemeContext } from "../../App";

export function Header() {
  const { cartQuantity } = useCart();
  const { toogleTheme, theme } = useContext(ThemeContext);

  function handleToogleTheme() {
    toogleTheme();
  }

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Brasília, DF
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
          <ButtonDarkLight onClick={handleToogleTheme}>
            {theme === "default" ? <Sun size={24} /> : <Moon size={24} />}
          </ButtonDarkLight>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
