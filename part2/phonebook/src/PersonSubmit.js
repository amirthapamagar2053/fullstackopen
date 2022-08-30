const PersonSubmit = ({
  submitHandler,
  changeHandler,
  changeNumHandler,
  newNum,
  newName,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <h2>Add new</h2>
      <div>
        Name: <input value={newName} onChange={changeHandler} />
      </div>
      <div>
        Number: <input value={newNum} onChange={changeNumHandler} />
      </div>

      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default PersonSubmit;
