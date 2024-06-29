import "./styles/App.css";
import "@mantine/core/styles.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { EditProfile } from "./pages/EditProfile";
import { EditVehicle } from "./pages/EditVehicle";
import { NotFound } from "./pages/NotFound";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme="dark">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/auth/login" />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/vehicle/edit" element={<EditVehicle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;
