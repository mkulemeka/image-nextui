import React, { useState } from "react";
import useFetch from "./hooks/useFetch";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import Home from "./containers/Home";

const theme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primaryLight: "$green200",
      primary: "#4ADE7B",
      primaryDark: "$green600",

      background: "#1d1d1d",
      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
    },
  },
});

const App = () => {
  const [input, setInput] = useState("");
  const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${input}`;
  const { images, isLoading } = useFetch(url);

  return (
    <NextUIProvider theme={theme}>
      <Home
        images={images}
        isLoading={isLoading}
        input={input}
        setInput={setInput}
      />
    </NextUIProvider>
  );
};

export default App;
