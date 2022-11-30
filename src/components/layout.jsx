import Products from "./Products";
import useFetch from "./customHooks/useFetch";

const Layout = () => {
  const apiUrl =
    "https://api.mercadolibre.com/sites/MLC/search?nickname=multiequip";
  const productsData = useFetch(apiUrl);

  return (
    <div className="Layout">
      {productsData.loading === true ? (
        <p>Cargando...</p>
      ) : (
        productsData.data.results.map((arr, i) => (
          <Products key={i} data={arr} />
        ))
      )}
    </div>
  );
};

export default Layout;
