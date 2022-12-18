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
import useGetUsers from "../../hooks/useGetUsers";
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
export default function UsersHome() {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useGetUsers({
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
          <GeneralTable headers={["First Name", "Last Name", "email"]}>
            <TableBody>
              {data.items.map((user) => (
                <TableRow
                  hover
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <StyledTableCell align="left">{user.name}</StyledTableCell>
                  <StyledTableCell align="left">
                    {user.lastname}
                  </StyledTableCell>
                  <StyledTableCell align="left">{user.email}</StyledTableCell>
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
