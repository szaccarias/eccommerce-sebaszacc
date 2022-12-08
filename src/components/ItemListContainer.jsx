import { getProducts, getProductsByCategory } from "../asyncMock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!categoryId) {
      getProducts()
        .then((res) => {
          setItems(res)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        });
    } else {
      getProductsByCategory(categoryId)
        .then((res) => {
          setItems(res)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        });
    }
  }, [categoryId]);

  if (isLoading) {
    return <h1 className="p-8">Cargando productos . . .</h1>;
  }
  return (
    <div className="ItemListContainer min-h-fit text-4xl flex flex-col items-center justify-center w-full ">
      <ItemList dataItems={items} />
    </div>
  );
};
export default ItemListContainer;