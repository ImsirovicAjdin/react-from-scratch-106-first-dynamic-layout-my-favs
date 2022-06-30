# About this React app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is [deployed on Netlify]().

## Learning Concepts covered

### Getting images from the web and passing them via props

Commits:

#### (0) Set up the README and the starter code

#### (1) Get the image from a third-party website and use it in a component

Here's my brand new `Car` component.
```jsx
function Car(props) {

    const carImgSrc = "https://www.codingexercises.com/img/2022-01-25/001-bmw-blue.jpg"

    return (
      <div>
        <img src={carImgSrc} alt="My favorite car" />
        <p>One of my favorite cars is a {props.color} {props.make} from {props.year}.</p>
      </div>
    )
  }

export default Car;
```

In `App`, I'm using props to make it truly dynamic.
```jsx
import Car from './Car';
import './App.css';

function App() {
  return (
    <Car make="BMW" color="blue" year="2020" />
  );
}

export default App;
```

#### (2) Remember passing data as props

I'm moving the image source data to the parent component. Remember "passing data as props"?
```jsx
function Car(props) {
    return (
      <div>
        <img src={props.carImgSrc} alt="My favorite car" />
        <p>One of my favorite cars is a {props.color} {props.make} from {props.year}.</p>
      </div>
    )
  }

export default Car;
```

Consequently, I'm updating the `App` component as well.
```jsx
import Car from './Car';
import './App.css';

function App() {
  return (
    <Car
        make="BMW"
        color="blue"
        year="2020"
        carImgSrc="https://www.codingexercises.com/img/2022-01-25/001-bmw-blue.jpg"
    />
  );
}

export default App;
```

#### (3) Invoking multiple instances of the same child component inside a parent component

An example of using a variable as a prop value.

```jsx
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
```

#### (4) Styling the app using flexbox

I'll update the `index.css` file with some custom styles, and use those classes as the `className` attribute in JSX in proper places.
```css
.cars {
  display: flex;
  flex-wrap: wrap;
}

.car {
  border: 1px solid gray;
  margin: 20px;
  padding: 20px;
  max-width: 300px;
}

.car img {
  width: 100%;
}
```

App.js:
```jsx
import Car from './Car';
import './App.css';

function App() {
  return (
    <div className="cars">
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
```

Car.js:
```jsx
function Car(props) {
    return (
      <div className="car">
        <img src={props.carImgSrc} alt="My favorite car" />
        <p>One of my favorite cars is a {props.color} {props.make} from {props.year}.</p>
      </div>
    )
  }

export default Car;
```

#### (5) Question: What would we do if we had 100 cars?

Would we have to add 100 JSX Car elements in App.js?

### Tasks

1. Think about the Question in point 5.
