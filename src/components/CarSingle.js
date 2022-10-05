import { Link } from 'react-router-dom';


export default function Car(props) {
    console.log(props)
    return (
        <div className="card">
            <div className="card-header">
                {
                    (!props.preview) ?
                    (
                        <h2>{ props.car.name }</h2>
                    )
                    :
                    <Link to={`/car/${props.car.id}`}>{ props.car.name }</Link>
                }
            </div>
            {
                (!props.preview) ?
                (
                    <div className="card-body">
                        <p>Year: { props.car.fuel }</p>
                        <p>Mileage: { props.car.mileage }</p>
                        <p>Price: { props.car.selling_price }</p>
                        <p>Transmission: { props.car.transmission }</p>
                        <p>Owner History: { props.car.owner }</p>
                        <p>Seats: { props.car.seats }</p>
                    </div>
                )
                :
                ''
            }
        </div>
    )
}