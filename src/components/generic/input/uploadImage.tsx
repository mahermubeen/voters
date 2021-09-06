import React from "react";
import { Dropdown } from "react-bootstrap";
import Icon from "../../../styles/Icon";

export default function UploadImage({ label, classes }: { label: string }) {
  return (
    <div className={`upload-wrap `+ classes}>
      <label className="fw600 fs24 lh48">{label}</label>

      <div class="file btn btn-lg img-div">
        Choose File
        <input className={`img-inputt`} type="file" name="file" />
      </div>
    </div>
  );
}
