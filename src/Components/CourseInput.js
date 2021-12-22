import "./CourseInput.css";
const CourseInput = () => {
  return (
    <div className="course-planner">
      <form className="course-form">
        <div>
          <label className="course-label">Course Goal</label>
        </div>
        <div>
          <input type="text" className="course-input"></input>
        </div>
        <div>
          <button type="submit" className="course-actions">
            Add Goal
          </button>
        </div>
      </form>
    </div>
  );
};
export default CourseInput;
