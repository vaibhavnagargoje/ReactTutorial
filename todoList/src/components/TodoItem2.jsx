function TodoItem2() {

  let todoName='Go to college'
  let TodoDate='4/3/2023'
  
    return <div class="container ">
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2 ">
          <button class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  }
  export default TodoItem2;
  