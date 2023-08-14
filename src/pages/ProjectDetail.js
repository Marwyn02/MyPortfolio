import React from "react";
import { useLoaderData, json } from "react-router-dom";
import ProjectItem from "../components/Layout/ProjectItem";

const ProjectDetail = () => {
  const data = useLoaderData();
  return (
    <>
      <ProjectItem data={data} />;
    </>
  );
};

export default ProjectDetail;

export async function loader({ request, params }) {
  const id = params.projectId;

  const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
  if (!response.ok) {
    throw json({ message: "Project not found" }, { status: 404 });
  }
  const data = await response.json();

  const website = data.websites.find((item) => item.title === id);
  if (!website) {
    throw json(
      { message: `Website with title ${id} not found` },
      { status: 404 }
    );
  }
  return website;
}
