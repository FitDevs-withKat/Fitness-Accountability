import { Html, Head, Main, NextScript } from "next/document";
import { basePath } from "../util/helper";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`${basePath}/fitdevslogo.ico`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
