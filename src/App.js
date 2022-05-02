import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ProductInfoPage, ShopPage } from "./pages";
import 'animate.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { eternalMovieData } from "./data/eternalMovieData";

function App() {
  return (
    <div className="bg-black w-full h-[100%]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shoppage" element={<ShopPage />} />
          <Route
            path="/productinfo/:title"
            element={<ProductInfoPage {...eternalMovieData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
