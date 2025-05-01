import MDXComponents from "@/components/MDXComponents";
import Layout from "@/layouts/Layout";
import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, ScaleFade } from "@chakra-ui/react";
import { theme } from "@/theme";
import "@/styles/links.css";
import CommandBarMain from "@/components/CommandBarMain";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Analytics />
      <ChakraProvider theme={theme}>
        <CommandBarMain />
        <MDXProvider components={MDXComponents}>
          <Layout>
            <ScaleFade initialScale={0.97} in={true} key={router.route}>
              <Component {...pageProps} />
            </ScaleFade>
          </Layout>
        </MDXProvider>
      </ChakraProvider>
    </>
  );
}
