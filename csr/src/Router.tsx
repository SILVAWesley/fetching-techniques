import { BrowserRouter, Route, Routes } from "react-router-dom";
import { All } from "./All";
import { Parcial } from "./Parcial";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Parcial />} />
        <Route path="/all" element={<All />} />
      </Routes>
    </BrowserRouter>
  );
}
