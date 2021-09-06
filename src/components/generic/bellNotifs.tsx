import React from "react";
import Icon from "../../styles/Icon";
import SelectDot from "./input/selectDot";
import { useHistory } from "react-router";

export default function BellNotifs({ text }: { text: string }) {
  const history = useHistory();
  return (
    <>
      <div className="notif-wrapper">
        <h4>Notifications</h4>
        <div className="main-notifs">
          <p className="notif-p">
            Lina Smithis waiting for you to approve her request!
          </p>
          <p className="notif-p">
            Hunza Tariq waiting for you to approve her request!
          </p>
          <p className="notif-p">
            Rizwan waiting for you to approve her request!
          </p>
          <p className="notif-p">
            Saleem waiting for you to approve her request!
          </p>
          <p className="notif-p">
            Lina Smithis waiting for you to approve her request!
          </p>
        </div>
      </div>
    </>
  );
}
