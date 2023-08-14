import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {data.map((item) => (
            <Link
              key={item.id}
              to={item.title}
              title={item.title}
              className="group"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={item.img}
                  alt=""
                  className="h-full md:h-52 w-full object-cover object-center group-hover:scale-125 duration-700"
                />
              </div>
              <div className="grid grid-cols-5 sm:grid-cols-4 xl:grid-cols-5 gap-x-1 lg:gap-x-1.5 xl:gap-x-1 px-1">
                {item.tools.map((tool) => (
                  <p
                    key={tool.programming.name}
                    className={`${tool.programming.name} text-xs text-center duration-700 group-hover:opacity-100 opacity-5 group-hover:translate-y-4`}
                  >
                    #{tool.programming.name}
                  </p>
                ))}
              </div>
              <h3 className="mt-4 text-lg font-medium text-white/60 group-hover:text-white/90 duration-300">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-white/40 group-hover:text-white/70">
                {item.date}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
