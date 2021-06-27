import React from 'react';

import GlobalStyles from '../src/styles/GlobalStyles';
import Routes from './Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
