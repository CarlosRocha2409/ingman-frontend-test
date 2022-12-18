import {
  Box,
  Button,
  Container,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import usePostProduct from "../../hooks/usePostProduct";
import { IProduct } from "../../types/product.type";
import { IReceiptDetail, IReceiptDetailInput } from "../../types/receipts.type";
import { IUser } from "../../types/user.type";
import SearchProduct from "../general/SearchProduct";
import SearchUser from "../general/SearchUser";
import GeneralTable from "../general/Table";

export default function ReceiptForm() {
  const [user, setUser] = useState<IUser>();
  const [details, setDetails] = useState<IReceiptDetailInput[]>([]);
  const { mutate, isLoading } = usePostProduct();
  const navigate = useNavigate();

  const subtotal = useMemo(
    () =>
      details.reduce(
        (prev, next) => prev + next.product.price * next.quantity,
        0
      ),
    [details]
  );

  const handleProductAdding = (product: IProduct) => {
    if (details.find((d) => d.product.code === product.code)) return;
    setDetails([
      ...details,
      {
        product,
        quantity: 1,
      },
    ]);
  };

  const handleSubmit = () => {
    if (details.length === 0) {
      toast.error("Please insert at least one product");
      return;
    }
    if (!user) {
      toast.error("Please provide a valid user");
      return;
    }

    mutate(
      {
        receipt: {
          userId: user.id,
        },
        details: details.map((d) => ({
          productId: d.product.id,
          quantity: d.quantity,
        })),
      },
      {
        onSuccess: () => {
          toast.success("Successfully created receipt");
          navigate("/receipts");
        },
        onError: (e: any) => {
          console.log(e);
          toast.error(e.message);
        },
      }
    );
  };
  const handleProductQuantityUpdate = useCallback(
    (
      event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
      code: string
    ) => {
      setDetails(
        details.map((d) => {
          if (d.product.code === code) {
            const quantity = +event.target.value > 0 ? +event.target.value : 1;
            return {
              ...d,
              quantity:
                quantity > d.product.quantity ? d.product.quantity : quantity,
            };
          }
          return d;
        })
      );
    },
    [details]
  );
  return (
    <Container>
      <Box margin={"40px 0"}>
        <SearchUser
          setUserSearch={(u) => {
            setUser(u);
          }}
        ></SearchUser>
      </Box>

      <Box margin={"40px 0"}>
        <SearchProduct setProduct={handleProductAdding} />
      </Box>

      {user && (
        <Typography marginY={"25px"} variant="h5">
          User: {user.fullName}
        </Typography>
      )}

      <Box
        sx={{
          margin: "20px 0",
        }}
      >
        <GeneralTable
          headers={["product", "quantity", "price", "subtotal", "tax", "total"]}
        >
          <TableBody>
            {details.map((detail) => (
              <TableRow>
                <TableCell>{detail.product.description}</TableCell>

                <TableCell>
                  <TextField
                    type={"number"}
                    value={detail.quantity}
                    onChange={(e) => {
                      handleProductQuantityUpdate(e, detail.product.code);
                    }}
                    inputProps={{
                      step: 1,
                    }}
                  />
                </TableCell>
                <TableCell>{detail.product.price}</TableCell>
                <TableCell>{detail.quantity * detail.product.price}</TableCell>
                <TableCell>{15.0}%</TableCell>
                <TableCell>
                  {(detail.quantity * detail.product.price * 1.15).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </GeneralTable>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box>
          <Typography variant="h5">Subtotal: {subtotal}</Typography>
          <Typography variant="h5">Tax: {0.15}</Typography>
          <Typography variant="h4" fontWeight={"bold"}>
            Total: {(subtotal * (1 + 0.15)).toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            sx={{
              margin: "20px 0",
            }}
            disabled={isLoading}
            onClick={() => {
              handleSubmit();
            }}
          >
            {!isLoading ? (
              <>Create Receipt</>
            ) : (
              <CircularProgress color="success" />
            )}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
