import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";

function App() {
  return (
    <div className="bg-black w-full h-[100vh] rounded-2xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
