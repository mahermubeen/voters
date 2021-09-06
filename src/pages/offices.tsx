import React from "react";
import NavbarCom from "../components/navbar";
import Sidebar from "../components/sideBar";
import Bar from "../components/generic/observerbar";
import TextBox from "../components/generic/input/textbox";
import Select from "../components/generic/input/select";
import UploadButton from "../components/generic/input/uploadButton";
import TextArea from "../components/generic/input/textarea";
import ContentCard from "../components/generic/cards/contentcard";
import PostTable from "../components/generic/tables/postTables";
import OfficesTable from "../components/generic/tables/officesTable";

import { useSelector, useDispatch } from "react-redux";
import { openOfficeModal } from "../redux/reducers/members";

import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useGetAllUsersQuery } from "../services/auth";

import AddOffice from "./modals/addOffice";

export default function Offices() {
  const isOpenOffice = useSelector((state) => state.addMemberModal.isOpenOffice);
  const dispatch = useDispatch();

  const history = useHistory();
  const token = localStorage.getItem("user-token");

  const [page, setPage] = useState(1);
  const { data: members, isSuccess } = useGetAllUsersQuery(page);
  
  

  return (
    <>
      <NavbarCom />
      <div className="d-flex">
        <Sidebar active={8} />
        <div className="right-sec">
          <div className="headingBar">
            <h1 className="fw700 fs36 lh36">Offices</h1>
            <button
              className="btn d-btn fw500 fs24 lh36 bg-red"
              onClick={()=>dispatch(openOfficeModal())}
            >
              Add New
            </button>
          </div>
          <div className="d-flex m-auto align-items-center justify-content-between member-card">
            <ContentCard title="Total Offices"  />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <OfficesTable
              columns={[
                "Name",
                "Election Location",
                "Address",
              ]}
              rows={members}
            />
          </div>
        </div>
      </div>

      {isOpenOffice ? <AddOffice isOpenOffice={isOpenOffice} /> : null}
    </>
  );
}
