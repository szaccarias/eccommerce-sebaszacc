import { DiCodeigniter } from "react-icons/di";

const Sidebar = () => {
  return (
    <div className="grid select-none grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-4 justify-center p-4 text-gray-500 text-justify">
      <div className="col-start-1 sm:col-start-1 md:col-start-2 lg:col-start-1">
        <div className="text-sm">
          <DiCodeigniter className="inline-block mx-1" />
        </div>
      </div>
      <div className="">
        <div className="text-xl">
          Multi Equip
        </div>
        <div className="text-md">
          Marcas:
          <div><a href="/">Segva</a></div>
          <div><a href="/">Orbis</a></div>
          <div><a href="/">Yelmo</a></div>
          <div><a href="/">Moretti</a></div>
          <div><a href="/">Cizalla</a></div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
