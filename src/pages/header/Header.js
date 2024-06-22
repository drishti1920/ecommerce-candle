import React from "react";
import classes from "./Header.module.css";
import Logo from "../../assessts/images/Logo.png";
import { ReactComponent as CartSVG } from "../../assessts/svgComponents/Cart.svg";
import { ReactComponent as WishlistSVG } from "../../assessts/svgComponents/Wishlist.svg";
import { ReactComponent as SearchSVG } from "../../assessts/svgComponents/Search.svg";
import { ReactComponent as LoginSVG } from "../../assessts/svgComponents/Login.svg";


const Header = () => {
  return (
    <div className={`${classes.HeaderWrapper}`}>
      <div className={`${classes.MenuSet}`}>
        <div className={`${classes.MenuButton}`}>
          <button
            type="button"
            className={`${classes.MenuBtn}`}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className={`${classes.MenuIcon}`}>
            </span>{" "}
            <span>MENU</span>
          </button>

          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              
              <button type="button"  class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"  ></button>
            </div>
            <div class="offcanvas-body">
             <ul className={`${classes.listMenu}`} >
                <li>MENU</li>
                <li>BLOG</li>
                <li>SHOP</li>
          </ul>
          <ul className={`${classes.listMenu2}`}>
                <li> <span><WishlistSVG/></span> WISHLIST</li>
                <li><span><LoginSVG/></span>LOGIN/REGISTER</li>
               
          </ul>
          <div className={`${classes.listMenuIcon}`} >
            <a href="#" target="_blank" ><i class="bi bi-twitter"></i></a>
            <a href="#" target="_blank" ><i class="bi bi-facebook"></i></a>
            <a href="#" target="_blank" ><i class="bi bi-pinterest"></i></a>

          </div>
            </div>
          </div>
        </div>

        <div className={`${classes.ContactInfo}`}>
          <span>Need Help?</span>
          <p>1-800-123-45-67</p>
        </div>
      </div>
      <div className={`${classes.HeaderLogo}`}>
        <img src={Logo} alt="brand-logo" />
      </div>

      <div className={`${classes.ProfileSET}`}>
        <ul>
          <li>
            <SearchSVG />
          </li>
          <li>
            <WishlistSVG />
          </li>
          <li className="d-flex gap-2">
            <div className={`${classes.Cart} `}>
              <span>₹0.00</span>
              <p>CART</p>
            </div>
            <CartSVG />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
