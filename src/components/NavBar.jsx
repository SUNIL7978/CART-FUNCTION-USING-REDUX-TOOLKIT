import { useSelector } from 'react-redux';
import { CartBag } from '../Icons';

const NavBar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Toolkit</h3>
        <div className="nav-container">
          <CartBag />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
