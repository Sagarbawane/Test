import React, { useState } from "react";
import TodoMain from "./TodoComponents/TodoMain";
import Update from "./TodoComponents/Update";

function Index() {
  const [editList, setEditList] = useState(false);
  return (
    <>
      {!editList ? (
        <TodoMain editList={editList} setEditList={setEditList} />
      ) : (
        <Update setEditList={setEditList} />
      )}
    </>
  );
}

export default Index;
