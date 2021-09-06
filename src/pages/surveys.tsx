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

export default function Surveys() {
  const history = useHistory();
  const token = localStorage.getItem("user-token");
  const { data, isSuccess } = useGetAllSurveysQuery(token);

  return (
    <>
      <NavbarCom />
      <div className="d-flex">
        <Sidebar active={4} />
        <div className="right-sec">
          <div className="headingBar">
            <div className="d-flex align-items-center">
              <h1 className="fw700 fs36 lh36 ml-4">Total Survey's</h1>
              <button onClick={() => history.push('addsurvey')} className="create-btn survey-btn">Add Survey</button>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <SurveyTable
              columns={[
                "Title",
                "Status",
                "Date Created",
                "Date Expired",
                "Options",
              ]}
              rows={data}
            />
          </div>
        </div>
      </div>
    </>
  );
}
