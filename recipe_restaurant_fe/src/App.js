import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import RecipePage from "./pages/RecipePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import RestaurantPage from "./pages/RestaurantPage";
import CommonNavbar from "./components/common/CommonNavbar";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/recipe" element={<RecipePage/>} />
        <Route path="/recipe/:foodId" element={<RecipeDetailPage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
