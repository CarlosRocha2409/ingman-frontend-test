import ReceiptIcon from "@mui/icons-material/Receipt";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";

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

  {
    name: "Users",
    icon: <GroupIcon />,
    path: "/users",
  },
];

export { navigationMenu };
