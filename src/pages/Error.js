import React from "react";
import Navbar from "../components/Navigation/Navbar";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let title = "An error occured!";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Page not found";
    message = "Could not find resource or page";
  }
  return (
    <>
      <Navbar />
      <div className="grid h-screen place-items-center content-center pb-16">
        <h1 className="text-black text-xl font-light">{title}</h1>
        <p className="text-black/70 text-xs">{message}</p>
        <Link to="/" className="text-gray-800/50 text-xs underline">
          Go back
        </Link>
      </div>
    </>
  );
};

export default Error;
