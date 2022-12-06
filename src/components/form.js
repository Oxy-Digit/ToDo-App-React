import { useState, useEffect } from "react";
import List from "./List";
const Form = () => {
  const [list, setList] = useState("");
  const [input, setInput] = useState("");
  const [newData, setNewData] = useState(false);
  const [valid, setValid] = useState(false);
  useEffect(() => {
    setNewData(false);
  }, [newData]);

  const submitForm = (event) => {
    event.preventDefault();
    if (input.length === 0) {
      setValid(true);
    } else {
      const dateTime = new Date();
      const nowTime = dateTime.toLocaleString();
      const item = { nots: input, time: nowTime, status: "panding" };
      setList([...list, item]);
      setInput("");
    }
  };

  const inputHandler = (event) => {
    setInput(event.target.value);
    setValid(false);
  };

  const removeItemHeader = (id) => {
    const data = list;
    const mydata = data.filter((_, index) => index != id);
    setList(mydata);
  };

  const confirmHandler = (id) => {
    const data = list;
    setNewData(true);
    data[id].status = "success";
    setList(data);
  };
  return (
    <>
      <form className="form-row mb-3" onSubmit={submitForm}>
        <div className="col-12">
          <input
            className="form-control mb-2"
            type="text"
            onChange={inputHandler}
            value={input}
          />
          {valid && (
            <p className="text-danger">
              <small>* Something is wrong!</small>
            </p>
          )}
        </div>
        <button className="btn btn-warning col">Add to list</button>
      </form>
      <ul className="list-group">
        <List
          removeItem={removeItemHeader}
          confirmItem={confirmHandler}
          list={list}
        />
      </ul>
    </>
  );
};

export default Form;
