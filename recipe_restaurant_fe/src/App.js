import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import RecipePage from "./pages/RecipePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import CommonNavbar from "./components/common/CommonNavbar";

function App() {
  return (
    <Router>
      <Header/>
      <CommonNavbar/>
      <Routes>
        <Route path="/recipe" element={<RecipePage/>} />
        <Route path="/recipe/:foodId" element={<RecipeDetailPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
