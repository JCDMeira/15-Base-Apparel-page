import React from 'react';
import { GlobalStyle, Conteiner } from './Global.js';

import logo from './assets/images/logo.svg';
import photo from './assets/images/hero-mobile.jpg';

function App() {
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <img className="logo" src={logo} alt="logo" />
        <div className="image">
          <img src={photo} alt="picture of a woman" />
        </div>
        <div className="info">
          <h1>
            <span>We&apos;re</span>coming soon
          </h1>
          <p>
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>
      </Conteiner>
    </>
  );
}

export default App;
