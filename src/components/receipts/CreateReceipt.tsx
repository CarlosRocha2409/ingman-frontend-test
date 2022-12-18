import Receipt from "@mui/icons-material/Receipt";
import { Button, Icon } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import ReceiptModal from "./ReceiptModal";

export default function CreateReceipt() {
  const [open, setOpen] = useState<boolean>(false);
  function toggleModal() {
    setOpen(!open);
  }
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        paddingBottom: "10px",
        width: "100%",
      }}
    >
      <Button variant="contained" startIcon={<Receipt />} onClick={toggleModal}>
        Add Receipt
      </Button>
      <ReceiptModal open={open} handleClose={toggleModal} />
    </Container>
  );
}
