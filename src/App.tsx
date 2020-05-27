import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Home from "./pages/Home/Home";
import FooterContainer from "./components/Footer/FooterContainer";

function App() {
    return (
        <div className="App">
          <HeaderContainer/>
          <div className="mainContent">
              <Home/>
          </div>
            <FooterContainer/>
        </div>
    );
}

export default App;
