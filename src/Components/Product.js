import { Fragment } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  return (
    <Fragment>
      <div className="contianer p-5 shadow-md my-10 bg-white text-center flex flex-col gap-5">
        <h1 className="font-bold text-[20px]">{product.title}</h1>
        <img
          className="h-[200px] w-[200px] mx-auto"
          src={product.image}
          alt=""
        />
        <div className="text-mainColor font-bold text-[20px]">
          Categroy: {product.category}
        </div>
        <div className="text-textColor text-[17px] text-start pl-5">
          {product.description}
        </div>
        <div className="font-bold text-[18px]">{product.price}$</div>
        <Link
          to="/products"
          className="bg-mainColor text-white py-2 w-[90%] mx-auto rounded-[7px]"
          type=""
        >
          Go Back ?
        </Link>
      </div>
    </Fragment>
  );
};
export default Product;
