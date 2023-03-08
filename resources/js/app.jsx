import './bootstrap';
import React from 'react';
import ReactDOM from "react-dom/client";
import App from './components/App';


if(document.getElementById('app')){

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}


// if(document.getElementById('app')){
//     ReactDOM.render(<App /> ,document.getElementById('app'))
// }