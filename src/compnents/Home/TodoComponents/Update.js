import React, { useState } from "react";
import { Edit_List } from "../../../Store/actions/userAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Update = props => {
  const dispatch = useDispatch();

  let history = useHistory();

  const [updateList, setUpdateList] = useState("");
  const setUpdate = e => {
    setUpdateList(e.target.value);
  };

  const Update = () => {
    const Data = {
      name: updateList,
    };
    const idName = props.match.params.id;

    dispatch(Edit_List(Data, idName));
    history.push(`/`);
  };

  return (
    <div className="viewportHeader">
      <div className="BoxUpdate">
        <div className="m-3 ">
          <textarea
            onChange={e => setUpdate(e)}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            placeholder="Update"
          ></textarea>
        </div>
        <div className="m-3">
          <button
            onClick={() => {
              history.push(`/`);
            }}
            data-bs-dismiss="modal"
            type="button"
            class="btn btn-dark "
          >
            Cancel
          </button>
          {updateList.length > 0 && (
            <button
              className="btn btn-warning mx-3"
              onClick={Update}
              type="button"
            >
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Update;
