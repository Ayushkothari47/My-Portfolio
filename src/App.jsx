import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/projectDetailPage"

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/project/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
