function Car(props) {
    return (
      <div className="car">
        <img src={props.carImgSrc} alt="My favorite car" />
        <p>One of my favorite cars is a {props.color} {props.make} from {props.year}.</p>
      </div>
    )
  }

export default Car;