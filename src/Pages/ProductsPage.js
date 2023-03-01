import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import Apiservices from "../apiService";
import Navbar from "../Components/Layout/Navbar";
import Table from "../Components/Table";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
const ProductsPage = () => {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  // console.log(apiUrl);
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getProducts = async () => {
    try {
      setIsLoading(true);
      // const porductAxiosObj = await Apiservices.get();
      // console.log(porductAxiosObj.data);
      const productObj = await (await fetch(apiUrl)).json();
      setProduct(productObj);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };

  const deleteProductHandler = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        // Apiservices.delete(`/${productId}`).then(getProducts());

        fetch(`http://localhost:8000/products/${productId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            getProducts();
          });
      }
    });
  };
  console.log(products);
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="page">
      <Navbar />
      <div className="blog-title">All Products</div>
      <Link to="/add-product" className="add-btn" type="">
        Add Product
      </Link>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="my-10 w-[95%] mx-auto overflow-x-auto">
          <Table products={products} onDeleteHandler={deleteProductHandler} />
        </div>
      )}
    </div>
  );
};
export default ProductsPage;
