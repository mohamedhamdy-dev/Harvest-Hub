import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ChatBot from "../shared/Chatbot";
import ScrollToTop from "../utils/ScrollToTop";

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="bg-[black]/25">
        <Header />
        <div className="bg-[url(/bg-texture-1.webp)] bg-cover bg-fixed pb-28">
          <Outlet />
        </div>
        <Footer />
        <ChatBot />
      </div>
    </>
  );
}

export default AppLayout;
