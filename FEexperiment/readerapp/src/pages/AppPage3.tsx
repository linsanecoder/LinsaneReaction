import '../App.css';
import Collapse from '../components/Collapse';
import { getCategories } from "../apis/fakeCategoriesApi"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

function AppPage3() {
  const categories = getCategories();
  const { state } = useLocation();

  return (
    <div className="App">
      <ul>
        {categories.map(cat => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
      <p>Data submitted {state?.data}</p>
      <Outlet />
    </div>
  );
}

export default AppPage3;
