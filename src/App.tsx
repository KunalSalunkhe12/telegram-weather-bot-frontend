import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/shared/Navbar";
import { getUsers } from "./api";

// Get users every 5 minutes to avoid server sleeping due to inactivity
// Prevent server cold start as it is hosted on Render's free tier
setInterval(() => {
  console.log("Render server pinged");
  getUsers();
}, 1000 * 60 * 5);

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
