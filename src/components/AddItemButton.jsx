import {useState} from 'react';

const AddItemButton = ({ dataItem, quanty }) => {

  const [cart, setCart] = useState({});

  const addToCart = () => {
    setCart({
      productId: dataItem.id,
      name: dataItem.name,
      price: dataItem.price,
      quanty: quanty,
    });
    console.log(cart);
  };

  return (
    <button
      onClick={addToCart}
      className="px-6 py-2 font-black text-base bg-blue-200 rounded active:bg-blue-300 active:shadow-inner hover:shadow-md"
    >
      Añadir al carrito
    </button>
  );
};

export default AddItemButton;
