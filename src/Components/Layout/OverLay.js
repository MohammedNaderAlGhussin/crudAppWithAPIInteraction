import { Fragment } from "react";
import DescMsg from "../DescMsg";

const OverLay = (props) => {
  return (
    props.show && (
      <Fragment>
        <div
          className="fixed top-0 left-0 w-full h-full z-10 bg-[#0000007e]"
          onClick={props.clicked}
        ></div>
        <DescMsg clicked={props.clicked} />
      </Fragment>
    )
  );
};
export default OverLay;
