
import './App.css';
import Buttons from './Components/Buttons/Buttons'
import Navigation from './Components/Navigation'
import Content from './Components/Content'
import Header from './Components/Header'



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />     
      </header>

      <body className = 'body'>         
         <Navigation />        
      </body>

    </div>
  );
}

export default App;




      // <header className="App-header">
      //   <Home />
      // {/* {document.pathname === '/home' ? <button className = 'Home-Button' >Home</button> : ""} */}
      // </header>
      // <body className = 'body'>
        
      //   <div className ='Content'>
      //    <Content />
      //   </div>

      //   <div className = 'data-buttons'>
      //     <Edit />
      //     <Delete />
      //     <New />
      //   </div>

      //   <div className = 'navigation-buttons'>
      //     <Previous />
      //     <Next />          
      //   </div>        

      // </body>




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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
