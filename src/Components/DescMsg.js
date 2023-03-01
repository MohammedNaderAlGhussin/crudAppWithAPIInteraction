const DescMsg = (props) => {
  return (
    <div className="absolute z-50 top-[20%] left-1/2 -translate-x-1/2 rounded-[7px] min-h-[250px] shadow-md container bg-white  p-5  w-[70%]  ">
      <h1 className="captalize text-mainColor font-bold md:text-[20px] text-center">
        What is this Website about ?
      </h1>
      <p className="text-textColor mt-4 font-bold ">
        In This website I made an interaction with a fake API, I managed to get
        the data and show it in this website, All of the design and the logic is
        from my own thinking. Probably it is not that much interesting but I
        really learned a lot and I think that I can deal with any other API from
        now on.
      </p>
      <button
        className="bg-mainColor font-bold block text-center mx-auto  mt-14 text-white py-2 px-10 rounded-[7px]"
        onClick={props.clicked}
        type=""
      >
        Ok
      </button>
    </div>
  );
};
export default DescMsg;
