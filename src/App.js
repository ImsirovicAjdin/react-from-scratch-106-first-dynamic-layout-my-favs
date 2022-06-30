import Car from './Car';
import './App.css';

function App() {
  return (
    <div className="cars">
      <h1>My favorite cars</h1>
      <Car make="BMW" color="blue" year="2020" />
    </div>
  );
}

export default App;
