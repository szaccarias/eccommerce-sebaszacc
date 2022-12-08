import { Link } from "react-router-dom";
import React from "react";

const Item = ({ dataItem }) => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.8)), url(${dataItem.image})`,
      }}
      className="bg-top bg-cover rounded-md shadow-sm ease-in-out duration-300 hover:ease-in-out hover:shadow-2xl border-solid hover:border-black flex flex-col items-center justify-center "
    >
      <Link to={`/products/${dataItem.id}`} className="ease-in-out backdrop-blur-sm hover:backdrop-blur-none bg-gradient-to-br from-blue to-transparent h-full w-full flex flex-col items-center justify-center gap-12 px-12 py-12 rounded-md">
        <h2 className="text-xl font-black text-center">{dataItem.name}</h2>
        <h3 className="text-sm font-black  rounded p-1 border-solid border-black-100"> $ {dataItem.price}</h3>
      </Link>

    </div>
  );
};

export default Item;
