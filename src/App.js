import React from "react";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import Users from "./components/Users/Users";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
  return (
    // указываем что рутинг будет в браузере
    <BrowserRouter>
      {/* header будет на всех наших страницах*/}
      <Header />
      {/* для перечисления роутеров */}
      <Routes>
        {/* непосредственно сами роуты */}
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/pocemons" element={<Pokemons />} />
        <Route path="/pocemons-2" element={<Pokemons2 />} />
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
      {/* footer будет на всех страницах */}
      <h2>footer</h2>
    </BrowserRouter>
  );
};

export default App;
