import React from "react";
import NavbarCom from "../components/navbar";
import Sidebar from "../components/sideBar";
import Bar from "../components/generic/observerbar";
import TextBox from "../components/generic/input/textbox";
import SelectSurvey from "../components/generic/input/selectSurvey";
import UploadButton from "../components/generic/input/uploadButton";
import TextArea from "../components/generic/input/textarea";
import ContentCard from "../components/generic/cards/contentcard";
import PostTable from "../components/generic/tables/postTables";
import MemberTable from "../components/generic/tables/memberTable";
import Icon from "../styles/Icon";
import SurveyTable from "../components/generic/tables/surveyTable";
import ButtonDel from "../components/generic/input/buttondele";

import { Field, reduxForm, FieldArray } from "redux-form";

import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useGetAllSurveysQuery } from "../services/survey";

import { useSelector, useDispatch } from "react-redux";
import { showInput } from "../redux/reducers/members";

function renderFormField({
  num,
  input,
  label,
  type,
  meta: { touched, error },
}) {
  return (
    <div>
      <div className="d-flex mr-5">
        <div className="cst-textinput">
          <label className="fw600 fs24 lh48" htlmFor={input.id}>
            {label + " " + num}
          </label>
          <div className="d-flex">
            <input
              className="adhsfie33"
              {...input}
              type={type}
              placeholder={label}
            />
            {touched && error && <span>{error}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

function renderFormItem(item, index, fields) {
  function handleClick() {
    fields.remove(index);
  }
  // console.log("key", index)
  return (
    <li className="form-item li-rel" key={index}>
      <Field
        component={renderFormField}
        label="Answer"
        name={item.toString() + ".name"}
        type="text"
        num={index + 1}
      />

      <button
        className="btn btn-delete btn-abs"
        onClick={handleClick}
        type="button"
      >
        <img src="img/trash.png" />
      </button>
    </li>
  );
}

function renderFormItems(props) {
  var fields = props.fields;

  function addItem() {
    fields.push({});
  }

  return (
    <div>
      <ul className="form-items">{fields.map(renderFormItem)}</ul>
      <button
        className="btn1 fw500 fs24 lh36 cl-p add-btn-rel"
        onClick={addItem}
        type="submit"
      >
        Add Answer
      </button>
    </div>
  );
}

function renderForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <FieldArray component={renderFormItems} name="items" />
      <div className="btns-questino flex float-r">
        <button
          type="submit"
          className="btn d-btn fw500 fs24 lh36 bg-red mb-4 "
        >
          New Question
        </button>

        <button type="submit" className="btn d-btn fw500 fs24 lh36 bg-red  ">
          Create Survey
        </button>
      </div>
    </form>
  );
}

var DecoratedForm = reduxForm({
  form: "dynamic-redux-form",
  initialValues: {
    items: [{}],
  },
})(renderForm);

function Index() {
  const history = useHistory();
  const token = localStorage.getItem("user-token");
  const { data, isSuccess } = useGetAllSurveysQuery(token);

  const inputShow = useSelector((state) => state.addMemberModal.inputShow);
  const dispatch = useDispatch();

  function submit(values) {
    console.log("submitted values", values);
  }

  return (
    <>
      <NavbarCom />
      <div className="d-flex">
        <Sidebar active={4} />
        <div className="right-sec">
          <div className="headingBar mt-5">
            <div className="d-flex align-items-center">
              <h1 className="fw700 fs36 lh36 ml-4">Add Survey</h1>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="dnkaskrier">
              <TextBox label="Title" />

              <div className="d-flex mr-5">
                <TextArea label="Question" />
              </div>

              <DecoratedForm onSubmit={submit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SelectingForm = reduxForm({
  form: "dynamic-redux-form",
  enableReinitialize: true,
})(Index);

export default SelectingForm;
