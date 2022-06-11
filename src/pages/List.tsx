import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import axiosInstance from "../common/useAxios";

function RequestList() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const onMoveDetail = (row: any) => {
    navigate("/video/" + row.id);
  };

  const columns = [
    {
      dataField: "userId",
      text: "userId",
      sort: true,
    },
    {
      dataField: "accountId",
      text: "accountId",
      sort: true,
    },
    {
      dataField: "accountVo.account",
      text: "account",
      sort: true,
    },
    {
      dataField: "accountVo.humanName",
      text: "userName",
      sort: true,
    },
  ];

  const startButtonHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
    const buttonElement = event.currentTarget;
    const accountId = buttonElement.getAttribute("data-accountId");
    const fcmToken = buttonElement.getAttribute("data-fcmToken");
    console.log(accountId + "*******" + fcmToken);
  }

  const selectRow: any = {
    clickToSelect: true,
    onSelect: onMoveDetail,
  };

  const fetchUsers = async () => {
    axiosInstance.get("/user").then((response) => {
      console.log(response.data.result.data);
      setUsers(response.data.result.data);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>userId</th>
          <th>accountId</th>
          <th>account</th>
          <th>username</th>
          <th>humanName</th>
          <th>Action</th>
        </tr>
        {users &&
          users.map((user: any) => (
            <tr key={user.userId}>
              <td style={{ border: "solid 1px green" }}>{user.userId}</td>
              <td style={{ border: "solid 1px green" }}>{user.accountId}</td>
              <td style={{ border: "solid 1px green" }}>
                {user.accountVo.account}
              </td>
              <td style={{ border: "solid 1px green" }}>
                {user.accountVo.username}
              </td>
              <td style={{ border: "solid 1px green" }}>
                {user.accountVo.humanName}
              </td>
              <td style={{ border: "solid 1px green" }}>
                <button onClick={startButtonHandler} data-accountId={user.accountVo.accountId} data-fcmToken={user.accountVo.fcmToken}>
                Start Treat
                </button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default RequestList;
