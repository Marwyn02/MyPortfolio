import React from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import "./ProjectItem.css";
import "../UI/Card.css";
import BackButton from "../UI/BackButton";

const ProjectItem = ({ data }) => {
  return (
    <>
      <div className="bg-main pb-5">
        <Navbar />
        <div className="px-3 grid md:grid-cols-2 gap-x-6">
          <div>
            <div className="md:hidden">
              <BackButton />
            </div>
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 mt-3 web-img">
              <img
                src={data.img}
                alt=""
                className="h-full w-full object-cover object-center group-hover:scale-125 duration-700"
              />
            </div>
          </div>
          <div className="mt-4 md:mt-3">
            <div className="hidden md:block mb-3">
              <BackButton />
            </div>
            <div className="flex justify-between">
              <h3 className="text-xl font-bold italic text-white">
                {data.title}
              </h3>
              <p className="text-xs text-white/30 italic">{data.date}</p>
            </div>
            <div className="my-4">
              <p className="text-sm italic text-gray-400/80 mb-2 underline">
                Tools that help this project
              </p>
              <div className="grid grid-cols-5 sm:grid-cols-4 xl:grid-cols-5 gap-x-1 lg:gap-x-1.5 xl:gap-x-1 px-1">
                {data.tools.map((tool) => (
                  <p
                    key={tool.programming.name}
                    className={`${tool.programming.name} text-xs text-center`}
                  >
                    #{tool.programming.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="my-5">
              <button className="bg-white/60 text-gray-800/90 py-2 w-full text-xs font-extrabold italic group hover:bg-white/90 hover:text-black duration-300">
                <a href={data.link} className="group-hover:text-red-900">
                  Live Demo
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectItem;
