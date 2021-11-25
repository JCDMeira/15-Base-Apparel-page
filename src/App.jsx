import React from 'react';
import { GlobalStyle, Conteiner } from './Global.js';

import logo from './assets/images/logo.svg';
import photo from './assets/images/hero-mobile.jpg';
import photo2 from './assets/images/hero-desktop.jpg';
import { SendEmail } from './components/SendEmail/index.jsx';

function App() {
  const windowSize = window.screen.width;
  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <img className="logo" src={logo} alt="logo" />
        <div className="image">
          <img
            src={windowSize < 900 ? photo : photo2}
            alt="picture of a woman"
          />
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

          <SendEmail />
        </div>
      </Conteiner>
    </>
  );
}

export default App;
