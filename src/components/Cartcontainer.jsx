import { useDispatch, useSelector } from 'react-redux';
import Cartitem from './Cartitem';
import { openModal } from '../Fetures/Modal/ModalSlice';

const Cartcontainer = () => {
  const dispatch = useDispatch();
  const { amount, total, cartItems } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Cart</h2>
          <h4 className="empty-cart">is currently empty.</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <Cartitem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total<span>₹{total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          type="button"
          className="btn clear-btn"
          onClick={() => dispatch(openModal())}
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default Cartcontainer;
