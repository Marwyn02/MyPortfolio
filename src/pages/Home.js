import React, { Suspense } from "react";
import Card from "../components/UI/Card";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
import { defer, useLoaderData, Await, json } from "react-router-dom";

const Home = () => {
  const { projects } = useLoaderData();

  return (
    <div className="bg-main">
      <Navbar />
      <div className="text-center mb-2 mt-12">
        <h1 className="font-semibold text-gray-50/90 tracking-wide">
          welcome to my collections
        </h1>
      </div>
      <Suspense
        fallback={
          <p className="text-center text-white text-xl mt-10 font-extrabold">
            Loading Projects...
          </p>
        }
      >
        <Await resolve={projects}>
          {(loadedProjects) => {
            return <Card data={loadedProjects} />;
          }}
        </Await>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;

async function loadProjects() {
  try {
    const response = await fetch(`${process.env.PUBLIC_URL}/data.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw json({ message: "Websites not found" }, { status: 500 });
    }
    const data = await response.json();

    return data.websites;
  } catch (err) {
    console.log(err);
  }
}

export function loader() {
  return defer({
    projects: loadProjects(),
  });
}
