import React from "react";
import dash_logo from "./dash_logo.jpeg";
import stu_logo from "./stu_logo.jpg";
import "./dashboard.css";

function Student_dashboard() {
  return (
    <>
      <div className="container">
        <header className="header">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-img active" href="#">
                <img src={dash_logo} className="dash-logo" alt="logo" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Notification
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-img active" href="#">
                <img src={stu_logo} className="stu-logo" alt="logo" />
              </a>
            </li>
          </ul>
        </header>
        <hr style={{ border: "2px solid black", width: "100%" }}></hr>
        <div className="box">
          <table>
            <tr>
              <th>Department</th>
              <th>Due Amount</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Library</td>
              <td>10.00</td>
              <td>
                <input type="checkbox" className="approval" />
              </td>
            </tr>
            <tr>
              <td>Sports</td>
              <td>0</td>
              <td>
                <input type="checkbox" className="approval" />
              </td>
            </tr>
            <tr>
              <td>Scholarship</td>
              <td>0</td>
              <td>
                <input type="checkbox" className="approval" />
              </td>
            </tr>
            <tr>
              <td>Workshop</td>
              <td>0</td>
              <td>
                <input type="checkbox" className="approval" />
              </td>
            </tr>
            <tr>
              <td>Class Incharge</td>
              <td>0</td>
              <td>
                <input type="checkbox" className="approval" />
              </td>
            </tr>
          </table>
          <div className="amt">
            <p id="notify">Total Due Amount : </p>
            <p id="appraval">
              <input type="checkbox" className="approval"/>
                 Approved by All departments,Pay and Collect TC after few days.....
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Student_dashboard;
