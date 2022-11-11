import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";
import WalletConnection from "./pages/WalletConnection";

export default function App(props) {
  return (
    <div className="container md:max-w-7xl items-center mx-auto w-[90%]">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="place" element={<PlaceToStay />} />
          <Route path="wallet-connection" element={<WalletConnection />} />
        </Routes>
      </Layout>
    </div>
  );
}
