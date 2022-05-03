import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useHistory } from "react-router-dom";
import { Delete_List } from "../../../Store/actions/userAction";
import { connect, useDispatch } from "react-redux";
function TodoList(props) {
  const dispatch = useDispatch();
  const [click, setClick] = useState([]);

  let history = useHistory();

  const EditOrder = id => {
    history.push(`/${id}`);
  };

  const handleChange = ele => {
    let tempPeopleInfo = click;
    if (tempPeopleInfo.some(people => people.id === ele.id)) {
      tempPeopleInfo = tempPeopleInfo.filter(people => people.id !== ele.id);
    } else {
      tempPeopleInfo.push(ele);
    }
    setClick(tempPeopleInfo);
  };

  const DeleteList = id => {
    if (click) {
      click.map(ele => {
        if (ele.id === id) {
          dispatch(Delete_List(id));
        }
      });
    }
  };

  return (
    <>
      <div classNameName="inputList">
        {props.List &&
          props.List.map(ele => {
            return (
              <>
                <div className=" boxList ">
                  <div className="col-5 md:col-7">
                    <div className="form-check">
                      <input
                        onChange={() => {
                          handleChange(ele);
                        }}
                        className="form-check-input"
                        type="checkbox"
                        value={click}
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckChecked"
                      >
                        {ele.name}
                      </label>
                    </div>
                  </div>

                  <div className="col-1">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => {
                        EditOrder(ele.id);
                        props.setEditList(true);
                      }}
                    >
                      Update
                    </button>
                  </div>
                  <div
                    onClick={() => DeleteList(ele.id)}
                    className="col-1 mt-1 "
                  >
                    <RiDeleteBin6Line classNameName="delete" />
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    List: state.userList,
  };
};
export default connect(mapStateToProps)(TodoList);
