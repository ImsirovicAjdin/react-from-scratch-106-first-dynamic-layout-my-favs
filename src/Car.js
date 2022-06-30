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
