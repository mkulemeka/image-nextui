import { Container, Grid } from "@nextui-org/react";
import React from "react";
import { Filter, ImgCard, Loader } from "../components";

const Home = ({ images, isLoading, input, setInput }) => {
  return (
    <Container style={{ paddingTop: "2rem" }}>
      <Filter input={input} setInput={setInput} />
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <Grid.Container gap={2} justify="center">
            {images.map((image) => (
              <Grid key={image.id}>
                <ImgCard
                  id={image.id}
                  user={image.user}
                  imageUrl={image.webformatURL}
                />
              </Grid>
            ))}
          </Grid.Container>
        </main>
      )}
    </Container>
  );
};

export default Home;
