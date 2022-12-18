import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useSearchSingleProduct from "../../hooks/useSearchProduct";
import { IProduct } from "../../types/product.type";

export default function SearchProduct({
  setProduct,
}: {
  setProduct: (product: IProduct) => void;
}) {
  const [text, setText] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);
  const { data, isLoading } = useSearchSingleProduct({
    code: text ? text : "",
    fetch: search,
    disableFetch: () => {
      setSearch(false);
    },
    updateProduct: setProduct,
  });

  function changeSearch(se: boolean) {
    setSearch(se);
  }

  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <Container>
      <Grid
        container
        spacing={2}
        columnSpacing={4}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Grid xs={9}>
          <TextField
            label="Product Code"
            variant="outlined"
            onChange={handleValueChange}
            value={text}
            error={search && text === ""}
            fullWidth
          />
        </Grid>
        <Grid xs={2}>
          <Button
            variant="contained"
            sx={{
              height: "100%",
            }}
            onClick={() => changeSearch(true)}
          >
            Search Product
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
