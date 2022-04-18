import Navbar from './Navbar';
import General from './components/General';
import Education from './components/Educational';
import Practical from './components/Practical';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <General />
      <Education />
      <Practical />
      </div>
    </div>
  );
}

export default App;

