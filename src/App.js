import { useDispatch, useSelector } from 'react-redux';
import Cartcontainer from './components/Cartcontainer';
import NavBar from './components/NavBar';
import { useEffect } from 'react';
import { calculationTotal } from './Fetures/Cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculationTotal());
  }, [cartItems, dispatch]);

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, [dispatch]);

  // if (isLoading) {
  //   return (
  //     <div className="loading">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <Cartcontainer />
    </main>
  );
}

export default App;
