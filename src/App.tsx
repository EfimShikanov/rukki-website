import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import MainPage from "./pages/mainPage";
import Footer from "./components/footer";
import MapTest from "./components/mapTest";
import 'mapbox-gl/dist/mapbox-gl.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <Footer />
      <MapTest/>
    </>
  );
};

export default App;
