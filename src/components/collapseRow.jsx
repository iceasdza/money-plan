import {
  Box,
  Collapse,
  Divider,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

export const CollapseRow = ({ row }) => {
  const [open, setOpen] = useState(false);
  return (
    <>

      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row?.name}
        </TableCell>
        <TableCell align="right">{row?.perMonth}</TableCell>
        <TableCell align="right">
          {row.totalPeriod}/{row?.period}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="subtitle2" gutterBottom>
                ของที่ผ่อน : {row?.name}
              </Typography>
              <Divider variant="middle" />
              <Typography variant="subtitle2" gutterBottom>
                จ่ายด้วย : {row?.payment}
              </Typography>
              <Divider variant="middle" />
              <Typography variant="subtitle2" gutterBottom>
                ยอดทั้งหมด : {row.total} บาท
              </Typography>
              <Divider variant="middle" />
              <Typography variant="subtitle2" gutterBottom>
                ผ่อนเดือนละ : {row.perMonth} บาท
              </Typography>
              <Divider variant="middle" />
              <Typography variant="subtitle2" gutterBottom>
                จำนวนเดือนผ่อน : {row.period} เดือน
              </Typography>
              <Divider variant="middle" />
              <Typography variant="subtitle2" gutterBottom>
                ผ่อนไปแล้ว : {row.totalPeriod} เดือน
              </Typography>
              <Divider variant="middle" />
              <Typography variant="subtitle2" gutterBottom>
                ผ่อนหมดในอีก : {row.endIn} เดือน
              </Typography>
              <Divider variant="middle" />
              <Typography variant="subtitle2" gutterBottom>
                เริ่มผ่อนวันที่ : {row.startDate}
              </Typography>
              <Divider variant="middle" />
              <Typography variant="subtitle2" gutterBottom>
                ผ่อนหมดวันที่ : {row.endDate}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
