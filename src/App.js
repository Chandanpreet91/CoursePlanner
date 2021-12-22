import { useState } from "react";
import CourseDisplay from "./Components/CourseDisplay";
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
  };
  return (
    <div>
      <CourseInput onHandleCourses={handleCourses} />
      <CourseDisplay coursesList={courses} />
    </div>
  );
}

export default App;
