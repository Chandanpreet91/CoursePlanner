const CourseDisplay = (props) => {
  return (
    <div className="courses-list">
      {props.coursesList.map((course) => (
        <li key={course.id} className="course-name">
          {course.text}
        </li>
      ))}
    </div>
  );
};
export default CourseDisplay;
