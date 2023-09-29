import { useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from '../Icons';
import { decrease, increase, removeItem } from '../Fetures/Cart/CartSlice';

const Cartitem = ({ id, title, price, image, inStock }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">₹{price}</h4>
        <button
          type="button"
          className="remove-btn"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
      <div>
        <button
          type="button"
          className="amount-btn"
          onClick={() => dispatch(increase({ id }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{inStock}</p>
        <button
          className="amount-btn"
          type="button"
          onClick={() => {
            if (inStock === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default Cartitem;
