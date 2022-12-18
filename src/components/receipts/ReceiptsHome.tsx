import {
  Container,
  CssBaseline,
  styled,
  TableBody,
  TableFooter,
  TablePagination,
  TableRow,
} from "@mui/material";
import useGetReceipts from "../../hooks/useGetReceipts";
import GeneralTable from "../general/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useState } from "react";
import CreateReceipt from "./CreateReceipt";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const receiptsHeaders = ["id", "user", "subtotal", "tax", "total"];

export default function ReceiptsHome() {
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();

  const { data, isLoading } = useGetReceipts({
    page,
  });
  const handlePageChange = (p: number) => {
    if (p + 1 < 1) return;
    setPage(p + 1);
  };

  function handleReceiptNavigate(id: number) {
    navigate(`/receipts/${id}`);
  }

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <CreateReceipt />
        {!isLoading && (
          <GeneralTable headers={receiptsHeaders}>
            <TableBody>
              {data.items.map((receipt) => (
                <TableRow
                  hover
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleReceiptNavigate(receipt.id)}
                >
                  <StyledTableCell align="left">{receipt.id}</StyledTableCell>
                  <StyledTableCell align="left">
                    {receipt.user.fullName}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {receipt.subtotal}
                  </StyledTableCell>
                  <StyledTableCell align="left">{receipt.tax}</StyledTableCell>
                  <StyledTableCell align="left">
                    {receipt.total}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[data.itemsPerPage]}
                  colSpan={5}
                  count={data.totalItems}
                  rowsPerPage={data.itemsPerPage}
                  page={page - 1}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={(_, p) => handlePageChange(p)}
                />
              </TableRow>
            </TableFooter>
          </GeneralTable>
        )}
      </Container>
    </>
  );
}
