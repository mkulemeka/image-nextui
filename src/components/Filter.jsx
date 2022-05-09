import { Grid, Input } from "@nextui-org/react";
import React from "react";

const Filter = ({ input, setInput }) => {
  return (
    <Grid.Container justify="center" style={{ marginBottom: "1.5rem" }}>
      <Input
        clearable
        placeholder="Search images"
        aria-label="search images"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </Grid.Container>
  );
};

export default Filter;
