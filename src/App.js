import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
