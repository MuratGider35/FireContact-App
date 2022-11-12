import React from "react";
import addData from "../utils/firebase";

const Form = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let infodata = {};
    data.forEach(function (value, key) {
      infodata[key] = value;
    });
    addData(infodata);
    console.log(infodata);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input name="user" type="text" placeholder="name" />
        <input type="tel" name="phone" id="" placeholder="tel" />
        <select name="gender" id="" placeholder="gender">
          <option value="female" default>
            female
          </option>
          <option value="male">male</option>
        </select>
        <button type="submit">ekle</button>
      </form>
    </div>
  );
};

export default Form;
