import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader"; 

export default function Root() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <PageLoader /> 
      <Outlet /> 
      <Footer />
    </>
  );
}