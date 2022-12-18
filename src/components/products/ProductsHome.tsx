import {
  Container,
  CssBaseline,
  styled,
  TableBody,
  TableCell,
  tableCellClasses,
  TableFooter,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import useGetProducts from "../../hooks/useGetProducts";
import GeneralTable from "../general/Table";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
export default function ProductsHome() {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useGetProducts({
    page,
  });

  const handlePageChange = (p: number) => {
    if (p + 1 < 1) return;
    setPage(p + 1);
  };
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        {!isLoading && data.items && (
          <GeneralTable headers={["Code", "Name", "Price", "Quantity"]}>
            <TableBody>
              {data.items.map((product) => (
                <TableRow
                  hover
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <StyledTableCell align="left">{product.code}</StyledTableCell>
                  <StyledTableCell align="left">
                    {product.description}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {product.price}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {product.quantity}
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
