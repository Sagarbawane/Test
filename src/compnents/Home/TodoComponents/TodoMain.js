import React, { useState } from "react";

import { connect } from "react-redux";
import TodoList from "./TodoList";
import TodoListAdd from "./TodoListAdd";

function TodoMain(props) {
  const [newList, setNewList] = useState("");
  return (
    <div className="todoBox">
      <h1 className="textTodo">ToDo List</h1>
      <TodoListAdd newList={newList} setNewList={setNewList} />

      <TodoList editList={props.editList} setEditList={props.setEditList} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    List: state.userList,
  };
};
export default connect(mapStateToProps)(TodoMain);
