import React from "react";
import { Dropdown } from "react-bootstrap";
import Icon from "../../../styles/Icon";
import { useState } from "react";

export default function SelectSurvey({
  title,
  items,
}: {
  title: string;
  items: { id: number; title: string }[];
}) {
  const [color, setColor] = useState("Select");

  return (
    <div className="cst-select survey-select-opt">
      <Dropdown className="type-selct">
        <Dropdown.Toggle>
          {color}
          <span className="ml-4 survy-svg">
            <Icon  name="cehvdown" />
          </span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="drop-menuu type-slct-drop">
          {items &&
            items.map((item) => (
              <Dropdown.Item
                onClick={() => setColor(item.title)}
                className="type-slct-item"
                value={item.id}
              >
                {item.title}
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
