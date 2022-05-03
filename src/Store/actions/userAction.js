export const Edit_List = (Data, id) => {
  console.log(Data, id);
  return { type: "EDIT_LIST", payload: { Data, id } };
};

export const Add_New_List = name => {
  return { type: "ADD_LIST", payload: name };
};

export const Delete_List = id => {
  return { type: "DELETE_LIST", payload: id };
};
