import React, { useState } from "react";
import "../StyleCss/create/create.css";
import { useDispatch, useSelector } from "react-redux";
import { createAcsion } from "../Reduxs/menuAcsion";
import { useHistory } from "react-router-dom";
import Alert from "./Alert";
const CreateCart = () => {
  const [ifKebab, setIfKebab] = useState(false);
  const alert = useSelector((state) => state.general.alert);
  const isLoading = useSelector((state) => state.general.isloading);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const history = useHistory();
  const [form, setForm] = useState({ name: "", p: "", cost: "" });
  const checkedHndler = (e) => {
    setIfKebab(e.target.checked);
  };

  const chanheHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  form.ifKebab = ifKebab;
  const changeFile = (e) => {
    const fileField = e.target.files[0];
    setFile(fileField);
  };
  const createHandler = (e) => {
    e.preventDefault();
    dispatch(createAcsion(form, file));
    setForm({ name: "", p: "", cost: "" });
    setFile(null);
    setTimeout(() => {
      history.push("/");
    }, 1000);
  };
  return (
    <form className="creteForm" onSubmit={(e) => createHandler(e)}>
      {alert && <Alert text={alert} />}
      <h3>Create Menu</h3>
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
      <div className="ifKebab">
        <label for="chechMark">If It Is Kebab ? Click The ChechMark</label>
        <input id="chechMark" type="checkbox" onChange={checkedHndler} />
      </div>
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
  );
};
export default CreateCart;
