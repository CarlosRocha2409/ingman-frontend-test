import Receipt from "@mui/icons-material/Receipt";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function CreateReceiptBtn() {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        paddingBottom: "10px",
        width: "100%",
      }}
    >
      <Button
        variant="contained"
        startIcon={<Receipt />}
        onClick={() => {
          navigate("/receipts/new");
        }}
      >
        Add Receipt
      </Button>
    </Container>
  );
}
