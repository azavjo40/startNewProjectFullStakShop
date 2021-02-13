import React, { useState } from "react";
import "../StyleCss/create/create.css";
import { useDispatch, useSelector } from "react-redux";
import { createAcsion } from "../Reduxs/menuAcsion";
import { useHistory } from "react-router-dom";
import Alert from "./Alert";
const CreateCart = () => {
  const [checked, setChecked] = useState(false);
  const alert = useSelector((state) => state.general.alert);
  const isLoading = useSelector((state) => state.general.isloading);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const history = useHistory();
  const [form, setForm] = useState({ name: "", p: "", cost: "" });
  const checkedHndler = (e) => {
    setChecked(e.target.checked);
  };

  const chanheHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  form.checked = checked;
  const changeFile = (e) => {
    const fileField = e.target.files[0];
    setFile(fileField);
  };
  const create = (e) => {
    console.log(form);
    e.preventDefault();
    dispatch(createAcsion(form, file));
    setForm({ name: "", p: "", cost: "" });
    setFile(null);
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };
  return (
    <div className="createCont">
      <form className="creteForm" onSubmit={(e) => create(e)}>
        {alert && <Alert text={alert} />}
        <label>Create Menu</label>
        <label>
          It's Kebab ? <input type="checkbox" onChange={checkedHndler} />{" "}
        </label>
        <input
          className="input"
          required
          type="text"
          placeholder="Title"
          name="name"
          value={form.name}
          onChange={(e) => chanheHandler(e)}
        />
        <input
          className="input"
          required
          type="text"
          placeholder="Paragraph"
          name="p"
          value={form.p}
          onChange={(e) => chanheHandler(e)}
        />
        <input
          className="input"
          required
          type="number"
          placeholder="Cost"
          name="cost"
          value={form.cost}
          onChange={(e) => chanheHandler(e)}
        />
        <input
          className="input"
          required
          type="file"
          onChange={(e) => changeFile(e)}
        />
        <button
          disabled={isLoading}
          style={{ margin: "15px" }}
          className="createBtn"
        >
          Create
        </button>
      </form>
    </div>
  );
};
export default CreateCart;
