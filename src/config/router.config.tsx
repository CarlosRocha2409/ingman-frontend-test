import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import ReceiptDetailPage from "../page/ReceiptDetail.page";
import ReceiptsPage from "../page/Receipts.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/receipts" replace={true} />,
  },

  {
    path: "/receipts",
    element: (
      <Layout>
        <ReceiptsPage />
      </Layout>
    ),
  },

  {
    path: "/receipts/:receiptId",
    element: (
      <Layout>
        <ReceiptDetailPage />
      </Layout>
    ),
  },
]);
