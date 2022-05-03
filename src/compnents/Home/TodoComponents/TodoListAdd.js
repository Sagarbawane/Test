import React from "react";

import { useDispatch } from "react-redux";
import { Add_New_List } from "../../../Store/actions/userAction";
function TodoListAdd(props) {
  const dispatch = useDispatch();
  const setTask = e => {
    props.setNewList(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      Add_New_List({
        name: props.newList,
        id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      })
    );
  };

  return (
    <>
      <div className="inputBox">
        <div style={{ flex: "0.8" }} class="mb-3">
          <textarea
            onChange={e => setTask(e)}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            placeholder="Update"
          ></textarea>
        </div>
        <div style={{ flex: "0.15" }}>
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoListAdd;
