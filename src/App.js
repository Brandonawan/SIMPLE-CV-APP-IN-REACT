import Navbar from './Navbar';
import General from './components/General';
import Education from './components/Educational';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <General />
      <Education />
      </div>
    </div>
  );
}

export default App;

