import ReceiptIcon from "@mui/icons-material/Receipt";
const navigationMenu: {
  name: string;
  icon: React.ReactNode;
  path: string;
}[] = [
  {
    name: "Receipts",
    icon: <ReceiptIcon />,
    path: "/receipts",
  },
];

export { navigationMenu };
