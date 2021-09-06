import React from "react";
import ButtonDel from "./buttondele";
import { useState } from "react";
import { onToggleSwitchChange } from "../../../redux/reducers/members";
import { useSelector, useDispatch } from "react-redux";

export default function ToggleBtn({ label }: { label: string }) {
  const checked = useSelector((state) => state.addMemberModal.checked);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-10 pt-20">
        <label className="fw600 fs24 lh48">{label}</label>
        <div className="ToggleSwitch ToggleSwitch__rounded">
          <div className="ToggleSwitch__wrapper">
            <div
              className={`Slider ${checked && "isChecked"}`}
              onClick={() => dispatch(onToggleSwitchChange())}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
