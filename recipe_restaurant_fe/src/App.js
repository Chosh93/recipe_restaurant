import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/common/Footer";
import MainPage from "./pages/MainPage";
import RecipePage from "./pages/RecipePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import RestaurantPage from "./pages/RestaurantPage";
import RecipeRankPage from "./pages/RecipeRankPage";
import LoginPage from "./pages/LoginPage";
import CommonNavbar from "./components/common/CommonNavbar";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/recipe" element={<RecipePage/>} />
        <Route path="/recipe/rank" element={<RecipeRankPage />} />
        <Route path="/recipe/:foodId" element={<RecipeDetailPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
