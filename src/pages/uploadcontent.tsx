import React from "react";
import NavbarCom from "../components/navbar";
import Sidebar from "../components/sideBar";
import Bar from "../components/generic/observerbar";
import TextBox from "../components/generic/input/textbox";
import Select from "../components/generic/input/select";
import UploadImage from "../components/generic/input/uploadImage";
import TextArea from "../components/generic/input/textarea";
import SelectOptions from "../components/generic/input/select-opt";

export default function Index() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("data");
  };

  return (
    <>
      <NavbarCom />
      <div className="d-flex">
        <Sidebar active={1} />
        <div className="right-sec">
          <div className="headingBar">
            <h1 className="fw700 fs36 lh36">Upload Content</h1>
          </div>
          <div className="grid align-items-center justify-content-between gap-20 grid-col-4">
            <TextBox label="Title" type="text" />
            <SelectOptions
              title="Select"
              label="Category"
              classes="top-15"
              items={[
                { id: 0, title: "Blog" },
                { id: 1, title: "Event" },
                { id: 2, title: "News" },
                { id: 3, title: "About Us" },
                { id: 4, title: "Election Message" },
                { id: 5, title: "Election Rule" },
                { id: 6, title: "Guide to Register" },
              ]}
            />
            <UploadImage classes="grid" label="Upload" />
            <TextBox label="Date" classes="max-content" type="date" />
          </div>
          <div className="d-flex justify-content-center mt-5">
            <TextArea label="Description" />
          </div>

          <div className="flex-center">
            <div className="btns-wrap">
              <button className="cancel-btn">Cancel</button>

              <button className="create-btn" onClick={handleSubmit}>
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
