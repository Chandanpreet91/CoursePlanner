import "./CourseDisplay.css";
const CourseDisplay = (props) => {
  return (
    <div>
      {props.coursesList.map((course) => (
        <ul key={course.id} className="courses-list">
          {course.text}
        </ul>
      ))}
    </div>
  );
};
export default CourseDisplay;
