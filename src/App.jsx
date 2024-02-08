import { useEffect, useState } from "react";
import "./App.css";
import {
  checkLocalStorage,
  getSheetURL,
  setLocalStorage,
} from "./services/storageService";
import { SpreadSeetModal } from "./components/spreadSheetModal";
import { getSheet } from "./services/spreadSheetService";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { CollapseRow } from "./components/collapseRow";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sheetData, setSheetData] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleGetData = async () => {
    const response = await getSheet(getSheetURL());
    const data = await response.json();
    setSheetData(data);
  };

  useEffect(() => {
    checkLocalStorage(openModal, handleGetData);
  }, []);

  return (
    <>
      <SpreadSeetModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        setLocalStorage={setLocalStorage}
        handleGetData={handleGetData}
      />
      <div style={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          ผ่อนอะไรหนักหนาวะ
        </Typography>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>รายการ</TableCell>
              <TableCell>เดือนละ</TableCell>
              <TableCell>ผ่อน</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sheetData?.map((row, index) => (
              <CollapseRow key={index} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
