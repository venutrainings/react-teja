import "./App.css";
import { useState } from "react";
import Papa from "papaparse";
import CSVFileValidator from "csv-file-validator";


let requiredError = (headerName, rowNumber, columnNumber) => {
  return `<div class="red">${headerName} is required in the <strong>${rowNumber} row</strong> / <strong>${columnNumber} column</strong></div>`;
};
let validateError = (headerName, rowNumber, columnNumber) => {
  return `<div class="red">${headerName} is not valid in the <strong>${rowNumber} row</strong> / <strong>${columnNumber} column <br></strong></div>`;
};
let uniqueError = (headerName) => {
  return `<div class="red">${headerName} is not unique</div>`;
};

let isSerialNumberInteger = function (serialNumber) {
  let intCheck = /[0-9]/;
  return intCheck.test(serialNumber);
};

let CSVConfig = {
  headers: [
    {
      name: "Serial Number",
      inputName: "Serial Number",
      required: true,
      validate: isSerialNumberInteger,
      requiredError,
      validateError
    },
    {
      name: "Company Name",
      inputName: "Company Name",
      required: true,
      requiredError
    },
    {
      name: "Employee Markme",
      inputName: "Employee Markme",
      required: false,
      requiredError
    }, {
      name: "Description",
      inputName: "Description",
      required: true,
      requiredError
    }, {
      name: "Leave",
      inputName: "Leave",
      required: true,
      requiredError
    },

  ]
};



function App() {
  
  let [csvData, setCsvData] = useState("");
  const rowsArray = [];
  const valuesArray = [];
  const [colNames, setColNames] = useState([]);
  const [values, setValues] = useState([]);



  let handleChange = (e) => {
    CSVFileValidator(e.target.files[0], CSVConfig).then((csvData) => {
      csvData.inValidMessages.forEach((message) => {
        document
          .getElementById("invalidMessages")
          .insertAdjacentHTML("beforeend", message);
      });

      csvData.data.map((d) => {
        rowsArray.push(Object.keys(d));
        valuesArray.push(Object.values(d));
      });


      setCsvData(csvData.data);
      setColNames(rowsArray[0]);
      setValues(valuesArray);
      console.log(values);


    });
  };
  

  return (
    <div>
      <input type="file" name="file" onChange={handleChange} accept=".csv" style={{ display: "block", margin: "10px auto" }} />
      <br />
      <br />
      <div id="invalidMessages" />

      <table className="table">
        <thead>
          <tr>
            {colNames.map((rows, index) => {
              return <th key={index}>{rows}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => {
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;