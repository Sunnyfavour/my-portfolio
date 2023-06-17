import {Navbar,Heading,Footer,Main,Landing} from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient">
        <Navbar/>
        <Heading/>
        <Main/>
        <Footer/>
      </div>
      <div>

        <Landing/>
      </div>

    </div>
  );
}

export default App;
