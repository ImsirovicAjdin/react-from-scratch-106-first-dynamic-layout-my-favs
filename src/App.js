import Car from './Car';
import './App.css';

function App() {
  return (
    <div>
      <h1>My favorite cars</h1>
      <Car
        make="BMW"
        color="blue"
        year="2020"
        carImgSrc="https://www.codingexercises.com/img/2022-01-25/001-bmw-blue.jpg" />
      <Car
        make="Mercedes"
        color="gray"
        year="2018"
        carImgSrc="https://www.codingexercises.com/img/2022-01-25/002-mercedes-gray.jpg" />
      <Car
        make="Toyota"
        color="gray"
        year="new"
        carImgSrc="https://www.codingexercises.com/img/2022-01-25/003-toyota-gray.jpg" />
      <Car
        make="Alfa Romeo"
        color="red"
        year="2012"
        carImgSrc="https://www.codingexercises.com/img/2022-01-25/004-alpha-romeo-red.jpg" />
    </div>
  );
}

export default App;