import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ChatBot from "../shared/Chatbot";

function AppLayout() {
  return (
    <div className="bg-[black]/25">
      <Header />
      <div className="bg-[url(/bg-texture-1.webp)] bg-cover bg-fixed pb-28">
        <Outlet />
      </div>
      <Footer />
      <ChatBot />
    </div>
  );
}
c;

export default AppLayout;
