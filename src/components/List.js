import Button from "./Button";

const List = (props) => {
  let data = props.list;

  const removeItemHeader = (e) => {
    const id = e.target.id;
    props.removeItem(id);
  };
  const confirmHandler = (e) => {
    const id = e.target.id;

    props.confirmItem(id);
  };

  const pandingItems = `list-group-item bg-info bg-opacity-10`;
  const successItems = "list-group-item bg-warning bg-opacity-10";

  const removeBtn = "btn btn-outline-danger mx-2";
  const confirmBtn = "btn btn-outline-success mx-2";

  if (data.length !== 0) {
    return data.map((data, mov) => (
      <li
        className={data.status !== "success" ? pandingItems : successItems}
        key={mov}
      >
        <div className="d-flex align-items-center justify-content-between">
          <p className="m-0">
            {data.nots} <small className="text-danger mx-4">~{data.time}</small>
          </p>
          <div>
            <Button
              btnrole={removeBtn}
              btnText="Remove"
              mov={mov}
              btnAction={removeItemHeader}
            />
            {data.status !== "success" && (
              <Button
                btnrole={confirmBtn}
                btnText="Confirm"
                mov={mov}
                btnAction={confirmHandler}
              />
            )}
          </div>
        </div>
      </li>
    ));
  } else {
    return <p className="alert alert-info">Add New item</p>;
  }
};
export default List;
