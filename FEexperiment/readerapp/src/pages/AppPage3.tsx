import '../App.css';
import Collapse from '../components/Collapse';
import { getCategories } from "../apis/fakeCategoriesApi"
import { Outlet } from "react-router-dom"

function AppPage3() {
  const categories = getCategories();

  return (
    <div className="App">
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default AppPage3;
