import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import ItemListContainer from "./components/Navbar/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Hola ItemListContainer"/>
      <div className="grid">
        <Sidebar />
        <Layout />
      </div>
      <Footer />
    </div>
  );
}

export default App;

