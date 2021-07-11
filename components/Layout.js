import Meta from "./Meta";
import Footer from "./Footer";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
