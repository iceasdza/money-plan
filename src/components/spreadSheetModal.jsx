import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import { Box, Button, Input, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  width: 325,
  p: 1,
};

const buttonStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  marginTop: "12px",
};

export const SpreadSeetModal = ({
  isModalOpen,
  handleCloseModal,
  setLocalStorage,
  handleGetData,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClickOK = () => {
    setLocalStorage(value);
    handleCloseModal();
    handleGetData();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isModalOpen}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Please insert your spread sheet URL!
        </Typography>
        <Input
          placeholder="spread sheet url"
          style={{ width: "100%" }}
          value={value}
          onChange={handleChange}
        />
        <div style={buttonStyle}>
          <Button onClick={handleClickOK} disabled={!value} variant="contained">
            OK
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
