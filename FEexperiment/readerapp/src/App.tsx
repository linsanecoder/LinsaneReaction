import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/Layout';
import AppPage0 from "./pages/AppPage0";
import AppPage1 from "./pages/AppPage1";
import AppPage2 from "./pages/AppPage2";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<AppPage0 />} />
        <Route path="/page1" element={<AppPage1 />} />
        <Route path="/page2" element={<AppPage2 />} />
      </Routes>
    </div>
  );
}

export default App;
