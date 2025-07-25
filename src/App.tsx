import { Route, Routes } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Router />} />
        <Route path="/:language/*" element={<Router />} />
      </Routes>
    </>
  );
}

export default App;
