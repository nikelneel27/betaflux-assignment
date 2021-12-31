import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import WebUnderConstruction from "./components/WebUnderConstruction";
import Main from "./components/Dashboard/components/Main/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="main" element={<Main />} />
            <Route
              path="under-construction"
              element={<WebUnderConstruction />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
