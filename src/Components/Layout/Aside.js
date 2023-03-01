import { NavLink } from "react-router-dom";
const Aside = () => {
  return (
    <div className="hidden md:block h-screen bg-white px-5 max-w-[200px] relative border-r-[1px] border-[#eee]">
      <div className="text-[35px] font-bold py-10">
        <span className="text-mainColor ">B</span>LOGS
      </div>
      <p className="text-[14px] relative text-textColor font-bold mb-10 before:absolute before:content-[''] before:w-1/2 before:h-[1px] before:bg-textColor before:-bottom-2 before:left-0">
        Admin Tools
      </p>
      <div className="flex flex-col gap-3">
        <NavLink
          to="/products"
          className={(props) =>
            props.isActive
              ? "blogs-clicked"
              : ["blogs", "hover:blogs-hover"].join(" ")
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/categories"
          className={(props) =>
            props.isActive
              ? "blogs-clicked"
              : ["blogs", "hover:blogs-hover"].join(" ")
          }
        >
          Categories
        </NavLink>
      </div>
    </div>
  );
};

export default Aside;
