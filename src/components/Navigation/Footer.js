import React from "react";

const Footer = () => {
  return (
    <>
      <div className="z-20 pt-7 pb-9 lg:py-12 bg-black/90 text-center text-xs md:text-sm">
        <a
          href={"https://github.com/Marwyn02"}
          className="text-white/50 pb-2 font-bold underline hover:text-white"
        >
          Github
        </a>
        <p className="text-white/80 mb-3 md:mb-1.5">
          Designed and developed by:{" "}
          <span className="font-semibold">Marwyn Sumargo</span>
        </p>
        <div className=" gap-2 text-white/50 flex justify-center text-xs md:text-sm">
          <p>@ReactJS</p>
          <p className="mx-1.5">@Tailwind</p>
          <p>@React-Router</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
