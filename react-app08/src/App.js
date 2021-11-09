import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Statement from "./components/Statement";
import AboutUs from "./components/AboutUs";

const App = () => (
  <Router>
    <Header title="Budget Tracker" />

    <Routes>
      <Route path="/" element={<Statement />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>

  </Router>
);

export default App;
