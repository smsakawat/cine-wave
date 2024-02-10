import { useContext, useState } from 'react';
import Logo from '../../assets/icons/logo.svg';
import Moon from '../../assets/icons/moon.svg';
import Ring from '../../assets/icons/ring.svg';
import Cart from '../../assets/icons/shopping-cart.svg';
import Sun from '../../assets/icons/sun.svg';
import { MovieContext, ThemeContext } from '../context/contexts';
import CartDetails from '../movie/CartDetails';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const {
    state: { cartData },
  } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <>
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="ring-icon" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? Sun : Moon}
                  width="24"
                  height="24"
                  alt="moon-icon"
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative"
                href="#"
                onClick={() => setShowCart(true)}
              >
                <img src={Cart} width="24" height="24" alt="" />
                {cartData.length > 0 && (
                  <span className="bg-primary/90 rounded-full h-6 w-6 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 text-center text-sm text-slate-100 flex justify-center items-center font-semibold">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Show Cart Details */}
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
    </>
  );
};

export default Header;
