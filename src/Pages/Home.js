import { useState } from "react";
// import DescMsg from "../Components/DescMsg";
import Navbar from "../Components/Layout/Navbar";
import OverLay from "../Components/Layout/OverLay";
import BlogImg from "./../resources/Images/blogging-image.jpg";

const Home = () => {
  const [shown, setShown] = useState({
    isShowed: false,
  });
  const msgBtnHandler = () => {
    setShown({ isShowed: true });
  };
  const msgCancelBtnHandler = () => {
    setShown({ isShowed: false });
  };
  return (
    <div className="page">
      <OverLay show={shown.isShowed} clicked={msgCancelBtnHandler} />

      <Navbar />
      <div className="container p-5">
        <div className="ml-20 lg:ml-0 lg:text-center font-bold text-4xl">
          Hello There ...
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          <div className="flex flex-col gap-10 mt-10">
            <h1 className="max-w-[350px] font-bold text-[40px] ml-5 tracking-wider">
              <span className="text-mainColor">Welcome</span> To Our Simple
              <span className="text-mainColor"> B</span>logs Website
            </h1>
            <p className="text-textColor font-bold text-[25px] capitalize max-w-[550px] ml-5">
              here we show our latest products for our special
              <span className="text-mainColor"> VIP </span>
              Members, feel free to check our lists , add , view , edit and
              delete your products.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-10">
            <img
              className="rounded-[10px] max-h-[300px]"
              src={BlogImg}
              alt=""
            />
            <button
              onClick={msgBtnHandler}
              className="bg-mainColor text-white py-2 w-1/2 mx-auto rounded-[7px] font-bold text-[17px]"
              type=""
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
