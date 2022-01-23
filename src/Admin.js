import React from "react";
import TableAdmin from "./TableAdmin";
import "./App.css";

function AdminScreen(_props) {
  return (
    <>
      <div className="top">
        <h4 className="admin">/admin</h4>
        <button className="add">Add</button>
      </div>
      <div>
        <TableAdmin />
      </div>
    </>
  );
}

export default AdminScreen;
