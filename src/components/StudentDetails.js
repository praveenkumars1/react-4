import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
  TableBody,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const StudentDetails = () => {
  const tablestyle = {
    width: "95%",
    borderRadius: "10px",
    position: "absolute",
    top: "35%",
    left: "2.5%",
  };
  const style = {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "20px",
  };
  const stylebody = {
    textAlign: "center",
    fontSize: "18px",
  };
  const border = { "&:last-child td, &:last-child th": { border: 0 } };

  function createData(name, age, course, batch) {
    return { name, age, course, batch };
  }
  const student = [
    createData("John", 24, "MERN", "October"),
    createData("Doe", 25, "MERN", "September"),
    createData("Biten", 26, "MERN", "September"),
    createData("Barar", 22, "MERN", "November"),
    createData("Christ", 23, "MERN", "October"),
    createData("Elent", 24, "MERN", "November"),
  ];
  return (
    <>
      <div className="student">
        <h1>Student Details</h1>
        <button className="btn-style">New Student</button>
      </div>
      <TableContainer component={Paper} style={tablestyle}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={style}>Name</TableCell>
              <TableCell style={style}>Age</TableCell>
              <TableCell style={style}>Course</TableCell>
              <TableCell style={style}>Batch</TableCell>
              <TableCell style={style}>Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {student.map((row, pos) => (
              <TableRow key={pos + 1} sx={border}>
                <TableCell style={stylebody}>{row.name}</TableCell>
                <TableCell style={stylebody}>{row.age}</TableCell>
                <TableCell style={stylebody}>{row.course}</TableCell>
                <TableCell style={stylebody}>{row.batch}</TableCell>
                <TableCell style={stylebody}>
                  <Link to={`/studentdesc/${pos + 1}`} className="link">
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StudentDetails;