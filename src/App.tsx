import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes/route";

import './App.css'

function App() {

  return (
    <Router>
      <MainRoutes/>  
    </Router>
  )
}

export default App
