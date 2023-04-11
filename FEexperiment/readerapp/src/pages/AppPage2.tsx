import '../App.css';
import Collapse from '../components/Collapse';
import { getCategories } from "../apis/fakeCategoriesApi"

function AppPage2() {
  const categories = getCategories();

  return (
    <div className="App2">
      {categories.map(cat => (
      <Collapse id={cat.id} label={cat.name}>
        <p>Object {cat.id} section</p>
      </Collapse>
      ))}
    </div>
  );
}

export default AppPage2;
