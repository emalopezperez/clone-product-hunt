import Head from "next/head";
import Header from "../header/Header";

const Layout = ({ children, title = "", description = "" }) => {
  return (
    <>
      <Head>
        <title>Clone</title>
        <meta name="description" content="" />
      </Head>
      <Header/>
      {children}
    </>
  );
};

export default Layout;
