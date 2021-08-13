import React from 'react';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  message?: string;
}
const App: React.FunctionComponent<AppProps> = ({message}) => {
  return (
  <div>
    <Counter />
  </div>
  );
}

App.defaultProps =  {
  message: 'Hello, defaultProps!'
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
