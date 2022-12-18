import { Fade, Modal } from "@mui/material";
import ReceiptForm from "../forms/Receipt.form";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

export default function ReceiptModal({ open, handleClose }: IProps) {
  return (
    <Modal open={open} onClose={handleClose}>
      <ReceiptForm />
    </Modal>
  );
}
