import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";
import WalletConnection from "./pages/WalletConnection";

export default function App(props) {
  return (
    <div className="container max-w-full ">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="place-to-stay" element={<PlaceToStay />} />
          <Route path="wallet-connection" element={<WalletConnection />} />
        </Routes>
      </Layout>
    </div>
  );
}
