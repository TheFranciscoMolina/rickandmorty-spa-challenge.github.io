import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage.jsx";
import Header from "./components/Header/Index.jsx";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
// import HistoryPage from "./pages/HistoryPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
        {/* <Route exact path="/history/:charid" element={<HistoryPage />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
