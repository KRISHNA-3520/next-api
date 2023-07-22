import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";

const theme={
  colors:{
    primary:'#355C7D'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
