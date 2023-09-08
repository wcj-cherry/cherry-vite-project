import React, { useState } from "react";
import Course from "./Course";

const Allcourses = () => {
  const [courses, setCourses] = useState([
    { title: "Kjava Courses", description: "Demo courses" },
    { title: "angular Courses", description: "Demo courses" },
    { title: "umbraco Courses", description: "Demo courses" },
  ]);

  return (
    <div className="flex justify-around">
      {courses.length > 0
        ? courses.map((item) => <Course course={item} />)
        : "No Courses"}
    </div>
  );
};

export default Allcourses;
