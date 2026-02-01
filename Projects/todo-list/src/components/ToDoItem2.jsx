import React from 'react'

let ToDoName = "Go to college";
let ToDoDate = "07/01/26";

function ToDoItem2() {
  return (
    <div>
        <div class="row ag-row">
          <div class="col-4">{ToDoName}</div>
          <div class="col-4">{ToDoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div></div>
  )
}

export default ToDoItem2