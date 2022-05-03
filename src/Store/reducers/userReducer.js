const initialList = [
  {
    name: "React Practice",
    id: 1,
  },
  {
    name: "Watch Ipl",
    id: 2,
  },
];

const userReducer = (state = initialList, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_LIST": {
      return state.concat(action.payload);
    }
    case "EDIT_LIST": {
      return state.map(ele => {
        if (ele.id === action.payload.id) {
          return Object.assign({}, ele, action.payload.Data);
        } else {
          return Object.assign({}, ele);
        }
      });
    }

    case "DELETE_LIST": {
      return state.filter(ele => ele.id !== action.payload);
    }

    default: {
      return [].concat(state);
    }
  }
};

export default userReducer;
