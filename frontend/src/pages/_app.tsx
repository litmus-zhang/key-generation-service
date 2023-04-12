import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <header className="z-10 fixed top-0 left-0 w-full  backdrop-blur-md  p-4 font-bold text-xl flex justify-center">
        {" "}
        Api Key Generator 🔑
      </header>
      <Component {...pageProps} />
      <footer className="text-center">
        Create by{" "}
        <a href="https://github.com/litmus-zhang" target="_blank">
          {" "}
          Litmus-Zhang ✨😃
        </a>
      </footer>
    </ChakraProvider>
  );
}
