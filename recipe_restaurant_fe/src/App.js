import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import CommonNavbar from "./components/common/CommonNavbar";

function App() {
  return (
    <Router>
      <Header/>
      <CommonNavbar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
