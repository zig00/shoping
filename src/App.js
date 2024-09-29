import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/headers";
import Footer from "./Components/Footer"
import Catalogue from "./pages/Catalogue"
import Fashion from "./pages/Fashion"
import Favourite from "./pages/Favourite"
import Offers from "./pages/Offers"
import Main from "./Mainpage"
import ItemsInner from "./pages/iteminner";
import "./styles/style.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="favourite" element={<Favourite />} />
          <Route path="offers" element={<Offers />} />
          <Route path="itemsinner" element={<ItemsInner />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

