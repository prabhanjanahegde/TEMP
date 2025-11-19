import { Route,Routes } from "react-router"
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"
import Create from "./pages/Create.jsx"
import Join from "./pages/join.jsx"
import JoinPreview from "./pages/JoinPreview.jsx"
import Login from "./pages/Login.jsx"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/joinPreview" element={<JoinPreview/>}/>
      </Routes>
    </div>
  )
}

export default App