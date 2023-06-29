import {Navbar,Heading,Footer,Main,Landing,Project,Contact} from "./components";
import './App.css';

function App() {
  return (
    <div className="App" id="Home">
      <div className="gradient">
        <Navbar/>
        <Heading/>
        <Main/>
        <Project/>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2f343b" fill-opacity="1" d="M0,128L30,106.7C60,85,120,43,180,48C240,53,300,107,360,154.7C420,203,480,245,540,256C600,267,660,245,720,213.3C780,181,840,139,900,117.3C960,96,1020,96,1080,112C1140,128,1200,160,1260,192C1320,224,1380,256,1410,272L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
        

        </div>
        <Landing/>
        <Contact/>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
