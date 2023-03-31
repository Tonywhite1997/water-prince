import React from "react";

function Input(props) {
  const { type, value, name, onChangeHandler, label } = props;
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default Input;
