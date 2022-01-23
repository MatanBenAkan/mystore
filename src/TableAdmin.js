import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>price</th>
            <th>description</th>
            <th>option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>product 1</td>
            <td>120$</td>
            <td>LJ shoes</td>
            <td>
              <button type="Submit">Edit</button>
              <button type="Submit">Delete</button>
            </td>
          </tr>
          <tr>
            <td>product 2</td>
            <td>60$</td>
            <td>jacket</td>
            <td>
              <button type="submit">Edit</button>
              <button type="Submit">Delete</button>
            </td>
          </tr>
          <tr>
            <td>product 3</td>
            <td> 80$</td>
            <td>Kd shoes</td>
            <td>
              <button type="Submit">Edit</button>
              <button type="Submit">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
