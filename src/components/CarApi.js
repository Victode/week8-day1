import { useEffect, useState } from 'react';
import Car from './CarSingle';

export default function CarList() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
            .then((res) => res.json())
            .then((data) => {
                setCars(data)
                console.log(data)
            })
    }, [])

    return (
        <div>
            { cars.map((car) => <Car car={car} preview={true} key={car.id} />) }
        </div>
    )
}