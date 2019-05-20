import React from 'react';
import Routes from './routes';

import "./styles.css";

import Header from './components/Header';
// import Main from './pages/main';

const App = () => (
  <div className="App">
      <Header />
      <Routes />
    </div>
);

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Word</h1>
//     </div>
//   );
// }

export default App;
