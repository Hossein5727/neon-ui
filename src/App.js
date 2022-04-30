import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, ShopPage } from "./pages";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


function App() {
  return (
    <div className="bg-black w-full h-[100%]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shoppage" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
