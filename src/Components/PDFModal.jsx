import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import PDFPreview from "./PDFPreview";

const PDFModal = ({ file }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open PDF
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            // width: "80%",     
            height: "80%",
            bgcolor: "white",
            boxShadow: 24,
            borderRadius: 2,
            p: 2,
            overflow: "auto",
          }}
        >
          <PDFPreview file={file} />
        </Box>
      </Modal>
    </>
  );
};

export default PDFModal;
