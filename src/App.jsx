import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";

export default function App(props) {
  return (
    <div className="container max-w-full ">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="place-to-stay" element={<PlaceToStay />} />
        </Routes>
      </Layout>
    </div>
  );
}
