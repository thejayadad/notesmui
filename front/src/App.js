
import {Routes, Route} from "react-router-dom"
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Update from "./pages/update/Update";


function App() {
  return (
    <div>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />

      </Routes>
    </div>
  );
}

export default App;
