import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../Components/Layout/Navbar";

const EditPage = () => {
  const { productId } = useParams();
  const [uniqueProduct, setUinqueProduct] = useState([]);

  const [newProduct, setNewProduct] = useState({
    title: uniqueProduct.title,
    category: uniqueProduct.category,
    description: uniqueProduct.description,
    price: uniqueProduct.price,
  });

  const getUniqueProduct = async () => {
    try {
      const uniqueProduct = await (
        await fetch(`http://localhost:8000/products/${productId}`, {
          method: "GET",
        })
      ).json();
      setUinqueProduct(uniqueProduct);
    } catch (error) {
      return error;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/products/${productId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        })
          .then((res) => res.json())
          .then((data) => {});
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  useEffect(() => {
    getUniqueProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(uniqueProduct);
  return (
    <div className="page">
      <Navbar />
      <div className="container p-5">
        <div className="text-mainColor text-[18px]">
          Edit Product with ID Number :{" "}
          <span className="text-[20px] text-black font-bold">{productId}</span>
        </div>
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-14 mt-10">
          <div className="flex flex-col  md:flex-row gap-14 ">
            <div className="flex flex-col gap-10 flex-1 min-h-[300px]">
              <article className="flex flex-col gap-3">
                <label className="font-bold text-[17px]" htmlFor="title">
                  Product Title
                </label>
                <input
                  onChange={(e) =>
                    setNewProduct({
                      title: e.target.value,
                      category: newProduct.category,
                      price: newProduct.price,
                      description: newProduct.description,
                    })
                  }
                  className="form-input"
                  id="title"
                  type="text"
                  placeholder={uniqueProduct.title}
                />
              </article>
              <article className="flex flex-col gap-3">
                <label className="font-bold text-[17px]" htmlFor="categroy">
                  Category Name
                </label>
                <input
                  onChange={(e) =>
                    setNewProduct({
                      title: newProduct.title,
                      category: e.target.value,
                      price: newProduct.price,
                      description: newProduct.description,
                    })
                  }
                  className="form-input"
                  id="category"
                  type="text"
                  placeholder={uniqueProduct.category}
                />
              </article>
              <article className="flex flex-col gap-3">
                <label className="font-bold text-[17px]" htmlFor="price">
                  Product Price
                </label>
                <input
                  onChange={(e) =>
                    setNewProduct({
                      title: newProduct.title,
                      category: newProduct.category,
                      price: e.target.value,
                      description: newProduct.description,
                    })
                  }
                  className="form-input"
                  id="price"
                  type="number"
                  placeholder={uniqueProduct.price}
                />
              </article>
              {/* <article className="flex flex-col gap-3">
                <label className="font-bold text-[17px]" htmlFor="rating">
                  Rating
                </label>
                <input
                  onChange={(e) =>
                    setNewProduct({
                      title: newProduct.title,
                      category: newProduct.category,
                      price: newProduct.price,
                      rating: {
                        rate: e.target.value,
                      },
                      description: newProduct.description,
                    })
                  }
                  className="form-input"
                  id="rating"
                  type="text"
                  // placeholder={uniqueProduct.rating.rate}
                />
              </article> */}
            </div>
            <textarea
              onChange={(e) =>
                setNewProduct({
                  title: newProduct.title,
                  category: newProduct.category,
                  price: newProduct.price,

                  description: e.target.value,
                })
              }
              className="flex-1 resize-none min-h-[200px] md:h-auto text-[18px] outline-none px-4 py-3 rounded-[7px]  border-2 border-white duration-300  focus:border-mainColor"
              rows=""
              cols=""
              placeholder={uniqueProduct.description}
            ></textarea>
          </div>
          <div className="flex flex-row justify-between items-center px-10">
            <button
              className="bg-mainColor block w-[90%] mx-auto text-white py-3  rounded-[7px] text-[20px] font-bold"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditPage;
