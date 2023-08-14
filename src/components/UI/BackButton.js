import React from "react";
import { Link } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";

const BackButton = () => {
  return (
    <div className="flex justify-end mx-2 my-2.5">
      <Link to="/">
        <p className="flex items-center border rounded-full px-2 py-0.5 opacity-40 group hover:opacity-100 duration-300">
          <RxArrowLeft className="text-white -ml-0.5" />
          <span className="text-sm text-white">Back</span>
        </p>
      </Link>
    </div>
  );
};

export default BackButton;
