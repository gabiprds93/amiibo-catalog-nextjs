import { FC } from "react";
import { AppProps as Props } from "next/app";

// Providers
import Providers from "providers/Providers";
// Styles
import "../styles/style.sass";

const App: FC<Props> = (props) => {
  const { Component, pageProps } = props;
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};

export default App;
