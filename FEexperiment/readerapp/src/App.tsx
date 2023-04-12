import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/Layout';
import AppPage0 from "./pages/AppPage0";
import AppPage1 from "./pages/AppPage1";
import AppPage2 from "./pages/AppPage2";
import AppPage3 from "./pages/AppPage3";
import AppPage4 from "./pages/AppPage4";
import Details from "./components/Details";
import Details3 from "./components/Details3";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<AppPage0 title="Welcome Home!" />} />
        <Route path="/page1" element={<AppPage1 />} />
        <Route path="/page2" element={<AppPage2 />} />
        <Route path="/page3" element={<AppPage3 />}>
          <Route path="details" element={<Details title="Name" desc="Detail" />} />
        </Route>
        <Route path="/page4" element={<AppPage4 />}>
          <Route path=":catId" element={<Details3 />} />
        </Route>
        <Route path="*" element={ <h1>Page Not Found</h1> } />
      </Routes>
    </div>
  );
}

export default App;
