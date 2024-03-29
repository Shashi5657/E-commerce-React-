import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  CartPage,
  SearchPage,
  CategoryProductPage,
  ProductSinglePage,
} from "./pages";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import Store from "./store/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <Header />
          <Sidebar />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
