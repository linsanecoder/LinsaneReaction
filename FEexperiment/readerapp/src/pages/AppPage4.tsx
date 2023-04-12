import '../App.css';
import Collapse from '../components/Collapse';
import { getCategories } from "../apis/fakeCategoriesApi"
import { Outlet, Link } from "react-router-dom"

function AppPage4() {
  const categories = getCategories();

  return (
    <div className="App">
      <ul>
        {categories.map(cat => (
          <li key={cat.id}><Link to={cat.id}>{cat.name}</Link></li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default AppPage4;
