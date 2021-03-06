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
import MemberTable from "../components/generic/tables/memberTable";

import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../redux/reducers/members";

import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useGetAllUsersQuery } from "../services/auth";

import AddMember from "./modals/addMember";

export default function Members() {
  const isOpen = useSelector((state) => state.addMemberModal.isOpen);
  const dispatch = useDispatch();

  const history = useHistory();
  const token = localStorage.getItem("user-token");

  const [page, setPage] = useState(1);
  const { data: members, isSuccess } = useGetAllUsersQuery(page);

  const [totalMembers, setTotalMembers] = useState();
  
  

  return (
    <>
      <NavbarCom />
      <div className="d-flex">
        <Sidebar active={8} />
        <div className="right-sec">
          <div className="headingBar">
            <h1 className="fw700 fs36 lh36">Members</h1>
            <button
              className="btn d-btn fw500 fs24 lh36 bg-red"
              onClick={() => dispatch(openModal())}
            >
              Add New
            </button>
          </div>
          <div className="d-flex m-auto align-items-center justify-content-between member-card">
            <ContentCard title="Total Members" total="4" />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <MemberTable
              columns={[
                "Usernames",
                "Email Address",
                "Locations",
                "Election Centers",
                "Options",
              ]}
              rows={members}
              title="Current Members"
            />
          </div>
        </div>
      </div>

      {isOpen ? <AddMember isOpen={isOpen} /> : null}
    </>
  );
}
