import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useSearchSingleUser from "../../hooks/useSearchSingleUser";
import { IUser } from "../../types/user.type";

export default function SearchUser({
  setUserSearch,
}: {
  setUserSearch: (user: IUser) => void;
}) {
  const [text, setText] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);
  const { data, isLoading } = useSearchSingleUser({
    id: text ? +text : 1,
    fetch: search,
    disableFetch: () => {
      setSearch(false);
    },
    updateUser: setUserSearch,
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
            label="User Id"
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
            Search User
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
