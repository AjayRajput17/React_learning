function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2023";
  return (
    <div className="container ">
      <div className="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger aj-button">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
