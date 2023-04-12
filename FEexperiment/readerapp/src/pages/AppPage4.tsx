import '../App.css';
import { getCategories } from "../apis/fakeCategoriesApi"
import { Outlet, NavLink } from "react-router-dom"

function AppPage4() {
  const categories = getCategories();

  return (
    <div className="App">
      <ul>
        {categories.map(cat => (
          <li key={cat.id}><NavLink to={cat.id}>{cat.name}</NavLink></li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default AppPage4;
