import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from "./pages/MainPage";
import CommonNavbar from "./components/common/CommonNavbar";

function App() {
  return (
    <Router>
      <Header/>
      <CommonNavbar/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
