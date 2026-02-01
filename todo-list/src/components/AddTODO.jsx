function AddToDo(){
  return (
     <div class="row ag-row">
          <div class="col-4">
            <input type="text" placeholder="What To-Do?"></input>
          </div>
          <div class="col-4">
            <input type="date" placeholder="enter date"></input>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
  )
}

export default AddToDo;