import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ChatWindow from "./components/ChatWindow";
import { templateContent, templateStyles } from "./config/templates/template1";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/agent"
          element={
            <ChatWindow templateConfig={{ templateContent, templateStyles }} />
          }
        />
      </Routes>
    </Router>
  );
}
