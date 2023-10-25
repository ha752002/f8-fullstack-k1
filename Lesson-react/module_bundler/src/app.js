import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";

const app = document.querySelector(".app");
app.innerHTML = `${Header()} ${Home()} ${Footer()}`;