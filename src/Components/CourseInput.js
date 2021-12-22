import React, { useState } from "react";
import "./CourseInput.css";
const CourseInput = (props) => {
  const [input, setInput] = useState("");
  const courseInputHandler = (event) => {
    setInput(event.target.value);
    console.log(input);
  };
  const courseFormHandler = (event) => {
    event.preventDefault();
    const formData = {
      text: input,
      id: Math.random() * 100 + 1,
    };
    props.onHandleCourses(formData);
    console.log(formData);
    setInput("");
  };
  return (
    <div className="course-planner">
      <form className="course-form" onSubmit={courseFormHandler}>
        <div>
          <label className="course-label">Course Goal</label>
        </div>
        <div>
          <input
            type="text"
            className="course-input"
            value={input}
            onChange={courseInputHandler}
          ></input>
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
