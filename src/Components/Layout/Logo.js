import LogoImg from "./../../resources/Images/logo.png";
const Logo = () => {
  return (
    <div className="">
      <img className="h-[50px] hidden md:block" src={LogoImg} alt="" />
    </div>
  );
};
export default Logo;
