import { useState } from "react";
import CourseInput from "./Components/CourseInput";

function App() {
  const dummy_courses = [
    { text: "Do all exercises!", id: 1 },
    { text: "Finish the Course", id: 2 },
  ];
  const [courses, setCourses] = useState(dummy_courses);
  const handleCourses = (data) => {
    setCourses((prevData) => {
      return [...prevData, data];
    });
    courses.map((course) => console.log(course));
  };
  return (
    <div>
      <CourseInput onHandleCourses={handleCourses} />
    </div>
  );
}

export default App;
