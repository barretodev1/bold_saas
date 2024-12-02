import { Mulish } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const melish = Mulish({
  subsets: ['latin-ext']
});

export const metadata = {
  title: "Bold Company - Agência de Marketing",
  description: "Agência de Marketing"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Head>
      <link rel="icon " href="/favicon.ico" type="image/x-icon"/>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </Head>
    <html lang="pt-br">
      <body className={`${melish.className} antialiased`}>
        {children}
      </body>
    </html>
    </>
  );
}
