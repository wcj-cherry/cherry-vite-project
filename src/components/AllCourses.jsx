import React, { useState } from "react";
import Course from "./Course";

const Allcourses = () => {
  const [courses, setCourses] = useState([
    { title: "Kjava Courses", description: "Demo courses" },
    { title: "angular Courses", description: "Demo courses" },
    { title: "umbraco Courses", description: "Demo courses" },
  ]);

  return (
    <>
      <h1>All courses</h1>
      <p>List of courses:</p>
      {courses.length > 0
        ? courses.map((item) => <Course course={item} />)
        : "No Courses"}
    </>
  );
};

export default Allcourses;
