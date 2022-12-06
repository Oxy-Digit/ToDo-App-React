const Button = (props) => {
  return (
    <>
      <button
        className={props.btnrole}
        onClick={props.btnAction}
        id={props.mov}
      >
        {props.btnText}
      </button>      
    </>
  );
};

export default Button;
