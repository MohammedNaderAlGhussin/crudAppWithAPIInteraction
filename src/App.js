import { Route, Routes } from "react-router-dom";
import Aside from "./Components/Layout/Aside";
import AddPage from "./Pages/AddPage";
import ProductsPage from "./Pages/ProductsPage";
import Home from "./Pages/Home";
import ViewPage from "./Pages/ViewPage";
import EditPage from "./Pages/EditPage";

// import ProductsPage from "./Pages/ProductsPage";

function App() {
  return (
    <div className="App flex">
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/add-product" element={<AddPage />} />
        <Route path="/edit-product/:productId" element={<EditPage />} />
        <Route path="/view-product/:productId" element={<ViewPage />} />
      </Routes>
    </div>
  );
}

export default App;
