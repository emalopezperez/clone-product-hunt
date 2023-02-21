
import Head from "next/head";
import Header from "../header/Header";
import Nav from "../header/navBar/Nav";

const Layout = (props) => {
  return (
    <>
      <Head/>
      <Header />
      <main>
        { props.children }
      </main>
    </>
  )
}

export default Layout;
