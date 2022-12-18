import ReceiptIcon from "@mui/icons-material/Receipt";
import InventoryIcon from "@mui/icons-material/Inventory";
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

  {
    name: "Products",
    icon: <InventoryIcon />,
    path: "/products",
  },
];

export { navigationMenu };
