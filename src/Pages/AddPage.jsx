import { useRef, useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../Components/Layout/Navbar";

const AddPage = () => {
  const apiUrl = "http://localhost:8000/products";
  const [productState, setProductState] = useState({
    title: "",
    category: "",
    description: "",
    price: 0,
  });

  let titleRef = useRef();
  let categoryRef = useRef();
  let descriptionRef = useRef();
  let priceRef = useRef();

  const checkFormHandler = () => {
    if (
      productState.title !== "" &&
      productState.category !== "" &&
      productState.description !== "" &&
      productState.price !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  const clear = () => {
    titleRef.current.value = "";
    categoryRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (checkFormHandler()) {
      try {
        await (
          await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(productState),
          })
        ).json();
      } catch (error) {
        return error;
      }
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 2000,
      });

      clear();
    } else {
      Swal.fire({
        icon: "error",
        title: "Make sure that all of the form inputs are not empty!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="page">
      <Navbar />
      <div className="container p-5">
        <div className="text-mainColor text-[18px]">Add New Product</div>
        <form
          onSubmit={formSubmitHandler}
          className="flex flex-col gap-14 mt-10"
        >
          <div className="flex flex-col md:flex-row gap-14 md:gap-10 ">
            <div className="flex flex-col gap-5 flex-1 min-h-[300px]">
              <article className="flex flex-col gap-3">
                <label className="font-bold text-[17px]" htmlFor="title">
                  Product Title
                </label>
                <input
                  ref={titleRef}
                  onChange={(e) =>
                    setProductState({
                      title: e.target.value,
                      price: productState.price,
                      category: productState.category,
                      description: productState.description,
                    })
                  }
                  className="form-input add"
                  id="title"
                  type="text"
                  placeholder="Product Name"
                />
              </article>
              <article className="flex flex-col gap-3">
                <label className="font-bold text-[17px]" htmlFor="categroy">
                  Category Name
                </label>
                <input
                  ref={categoryRef}
                  onChange={(e) =>
                    setProductState({
                      title: productState.title,
                      price: productState.price,
                      description: productState.description,
                      category: e.target.value,
                    })
                  }
                  className="form-input add"
                  id="category"
                  type="text"
                  placeholder="Ex. men's clothing"
                />
              </article>
              <article className="flex flex-col gap-3">
                <label className="font-bold text-[17px]" htmlFor="price">
                  Product Price
                </label>
                <input
                  ref={priceRef}
                  onChange={(e) =>
                    setProductState({
                      title: productState.title,
                      category: productState.category,
                      description: productState.description,
                      price: e.target.value,
                    })
                  }
                  className="form-input add"
                  id="price"
                  type="number"
                  placeholder="Price"
                />
              </article>
            </div>
            <textarea
              ref={descriptionRef}
              className="add flex-1 resize-none min-h-[200px] md:h-auto  text-[18px] outline-none px-4 py-3 rounded-[7px]  border-2 border-white duration-300  focus:border-mainColor"
              onChange={(e) =>
                setProductState({
                  title: productState.title,
                  category: productState.category,
                  description: e.target.value,
                  price: productState.price,
                })
              }
              placeholder="Product Description"
            ></textarea>
          </div>
          <div className="flex flex-row justify-between items-center px-10">
            <button
              to="/products"
              className="bg-mainColor block w-[90%] mx-auto text-white py-3 text-center  rounded-[7px] text-[20px] font-bold"
              type="submit"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddPage;
