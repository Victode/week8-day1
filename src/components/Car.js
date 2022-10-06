import { Link } from 'react-router-dom';


export default function Car(props) {
    return (
        <div className="card">
            <div className="card-header">
                {
                    (!props.preview) ?
                    (
                        
                        <div>
                            <h2> This is the { props.car.name }. </h2>
                            <h4>it's currently going for ${ props.car.selling_price }</h4>
                            <h4>Owner history: {props.car.owner}</h4>
                            <h4>transmission: {props.car.transmission}</h4>
                            <h4>Year: {props.car.year}</h4>

                        </div>
                        
                        
                    )
                    :
                    <Link to={`/car/${props.car.id}`}>{ props.car.name }</Link>
                }
            </div>
            {
                (!props.preview) ?
                (
                    <div className="card-body">
                        <p>{ props.car.mileage }</p>
                    </div>
                )
                :
                ''
            }
        </div>
    )
}
// export default function Car(props) {
//     return (
//         <div className="card" onClick={() => props.clickHandler(props.car)}>
//             <div className="card-body">
//                 <h2>{ props.car.make }</h2>
//             </div>
//         </div>
//     )
// }
