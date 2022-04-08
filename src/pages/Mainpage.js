import { getDatabase, ref, child, get } from "firebase/database";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledButton from "../styles/StyledButton.js";
import StyledTable from "../styles/StyledTable.js";
const Mainpage = ({ data }) => {
  console.log(data);

  return (
    <>
      <StyledTable>
        <table>
          <thead>
            <tr>
              <th>first name</th>
              <th>last name</th>
              <th>cardnumber</th>
              <th>phone</th>
              <th>actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((patient) => {
              const id = patient.key;
              console.log(patient.key);

              return (
                <tr key={patient.key}>
                  <td>{patient.firstName}</td>
                  <td>{patient.lastName}</td>
                  <td>{patient.cardNumber}</td>
                  <td>{patient.phone}</td>
                  <td>
                    <Link to={`./edit/${id}`}>
                      <StyledButton>edit</StyledButton>
                    </Link>
                    <Link to={`/view/${patient.key}`}>
                      <StyledButton>view</StyledButton>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </StyledTable>
    </>
  );
};

export default Mainpage;
