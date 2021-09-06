import React from "react";
import { Dropdown } from "react-bootstrap";
import Icon from "../../../styles/Icon";
export default function SelectOptions({
  label,
  title,
  items,
  classes
}: {
  label?: string;
  title: string;
  items: { id: number; title: string }[];
}) {
  return (
    <div className="cst-select" >
      {label ? (
        <>
          {" "}
          <label className="fw600 fs24 lh48">{label}</label>
        </>
      ) : (
        <></>
      )}
      <Dropdown>
        <Dropdown.Toggle>
          {title}{" "}
          <span className="ml-4">
            <Icon name="cehvdown" />
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu className={`drop-menuu `+ classes}>
          {items.map((x, i) => (
            <Dropdown.Item href="#/action-1">{x.title}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
