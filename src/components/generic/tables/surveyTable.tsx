import React from "react";
import SurveySelect from "../input/surveySelect";
import Moment from "moment";

export default function SurveyTable({ title, columns, rows }) {

  return (
    <div className="cardcst cst-table w-100">
      <h3 className="fw600 fs24 lh48">{title}</h3>
      <table className="post-table table table-borderless">
        <tr>
          {columns &&
            columns.map((x, i) => (
              <th>
                <div>{x}</div>
              </th>
            ))}
        </tr>

        {rows &&
          rows.map((row, i) => (
            <tr>
              <td>
                <div>{row.title}</div>
              </td>
              <td>
                <div>{row.status ? "Active" : "Inactive"}</div>
              </td>
              <td>
                <div>{Moment(row.createDate).format("DD-MM-YYYY")}</div>
              </td>
              <td>
                <div>{Moment(row.expiryDate).format("DD-MM-YYYY")}</div>
              </td>
              <td>
                {" "}
                <SurveySelect
                  items={[
                    { id: 0, title: "View" },
                    { id: 1, title: "Edit" },
                    { id: 2, title: "Remove" },
                    { id: 3, title: "Send Survey to Observers" },
                  ]}
                  id={row._id}
                />
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
