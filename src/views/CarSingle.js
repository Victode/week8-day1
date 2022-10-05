import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Car from '../components/Car';

export default function CarSingle() {
    const [car, setCar] = useState({})
    const { id } = useParams()


    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCar(data)
                console.log(data)
            })
    }, [])

    return (
        <div>
            <h1>A good choice! I can see you driving around in that thing</h1>
            <Car car={car} />
        </div>
    )
}