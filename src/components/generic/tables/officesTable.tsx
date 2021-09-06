import React from "react";
import SelectDot from "../input/selectDot";
import { useGetElectionQuery } from "../../../services/electionCenter";
import { useHistory } from "react-router";

export default function OfficesTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: {
    name: string;
    email: string;
    location: string;
    electioncenter: string;
  }[];
}) {
  const token = localStorage.getItem("user-token");

  function ElectionLocation(id) {
    const { post } = useGetElectionQuery(
      { id, token },
      {
        selectFromResult: ({ data }) => ({
          post: data,
        }),
      }
    );
    return <span>{post?.location}</span>;
  }

  function CenterName(id) {
    const { post } = useGetElectionQuery(
      { id, token },
      {
        selectFromResult: ({ data }) => ({
          post: data,
        }),
      }
    );
    return <span>{post?.name}</span>;
  }

  return (
    <div className="cardcst cst-table w-100">
      <h3 className="fw600 fs24 lh48">{title}</h3>
      <table className="post-table table table-borderless">
        <tr>
          <th></th>
          {columns && columns.map((x, i) => <th>{x}</th>)}
        </tr>

        {rows &&
          rows.map((row, i) => (
            <tr>
              <td>
                <img
                  className="member-img"
                  alt="name-logo"
                  src="img/logo.png"
                />
              </td>
              <td>
                <div className="lbl-grn">{row.name}</div>
              </td>
              <td>{ElectionLocation(row.electionCenter)}</td>
              <td>{CenterName(row.electionCenter)}</td>
              <td>
                {" "}
                <SelectDot
                  items={[
                    { id: 0, title: "View" },
                    { id: 1, title: "Edit" },
                    { id: 2, title: "Remove" },
                  ]}
                />
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
