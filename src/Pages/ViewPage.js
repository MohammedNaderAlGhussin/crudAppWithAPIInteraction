import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Layout/Navbar";
import Product from "../Components/Product";

const ViewPage = () => {
  const { productId } = useParams();
  const [choosenProduct, setChoosenProduct] = useState([]);
  const getChoosenProduct = async () => {
    try {
      const obj = await (
        await fetch(`http://localhost:8000/products/${productId}`, {
          method: "GET",
        })
      ).json();
      setChoosenProduct(obj);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    getChoosenProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(choosenProduct);
  return (
    <div className="page">
      <Navbar />
      <div className="container p-5">
        <h1 className="text-3xl">
          Product ID Number:
          <span className="font-bold text-4xl text-mainColor">
            {" "}
            {productId}
          </span>
        </h1>
        <Product product={choosenProduct} />
      </div>
    </div>
  );
};
export default ViewPage;
