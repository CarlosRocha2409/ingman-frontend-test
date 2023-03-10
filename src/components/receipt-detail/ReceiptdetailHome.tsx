import {
  Box,
  Container,
  Divider,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import useGetSingleReceipts from "../../hooks/useGetSingleReceipt";
import GeneralTable from "../general/Table";

export default function ReceiptDetailHome() {
  const { receiptId } = useParams();
  const { data, isLoading } = useGetSingleReceipts({
    id: receiptId ? +receiptId : 1,
  });
  return (
    <Container>
      {!isLoading && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
            }}
          >
            <Typography
              sx={{
                typography: {
                  xs: "h6",
                  md: "h4",
                },
              }}
            >
              User: {data.user.fullName}
            </Typography>
            <Typography
              sx={{
                typography: {
                  xs: "h6",
                  md: "h4",
                },
              }}
            >
              Receipt N{data.id}
            </Typography>
          </Box>

          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",

              margin: "20px 0",
            }}
          >
            <Typography
              sx={{
                typography: {
                  xs: "h5",
                  md: "h4",
                },
              }}
            >
              Date: {new Date(data.created_at).toLocaleDateString()}
            </Typography>
          </Box>

          <Divider />
          <GeneralTable
            headers={[
              "product",
              "quantity",
              "price",
              "subtotal",
              "tax",
              "total",
            ]}
          >
            <TableBody>
              {data.details.map((detail) => (
                <TableRow>
                  <TableCell>{detail.product.description}</TableCell>
                  <TableCell>{detail.quantity}</TableCell>
                  <TableCell>{detail.product.price}</TableCell>
                  <TableCell>{detail.subtotal}</TableCell>
                  <TableCell>{detail.taxtPercentage}%</TableCell>
                  <TableCell>{detail.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </GeneralTable>

          <Divider />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",

              margin: "20px 0",
            }}
          >
            <div>
              <Typography
                sx={{
                  typography: {
                    xs: "subtitle1",
                    md: "h6",
                  },
                }}
              >
                Subtotal: {data.subtotal.toFixed(2)}
              </Typography>
              <Typography
                sx={{
                  typography: {
                    xs: "subtitle1",
                    md: "h6",
                  },
                }}
              >
                Tax: {data.taxtPercentage}
              </Typography>
              <Typography
                sx={{
                  typography: {
                    xs: "h5",
                    md: "h6",
                  },
                }}
                fontWeight={"bold"}
              >
                Total: {data.total}
              </Typography>
            </div>
          </Box>
        </>
      )}
    </Container>
  );
}
