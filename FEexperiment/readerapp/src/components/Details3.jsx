import '../App.css';
import { getCategory } from "../apis/fakeCategoriesApi"
import { useParams } from "react-router-dom"

function Details3() {
  const catId = useParams();
  console.log(catId);
  const category = getCategory(catId);

  return (
    <div className="App">
      <h1>{category.name} Sessions</h1>
      <ul>
        {category?.sessions.map(session =>
          <li key={session.id}>
            <p>{session.name}</p>
            <p>{session.speaker.name} | {session.speaker.org}</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Details3;
