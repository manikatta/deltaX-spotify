import './App.css';
import Navbar from './components/nav';
import Songs from './components/songs';
import Topartists from './components/topartists';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Songs/>
     <Topartists/>

    </div>
  );
}

export default App;
