import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Car from '../components/Car';
import { DataContext } from '../contexts/DataProvider';

export default function CarSingle() {
    const [car, setCar] = useState({})
    const { id } = useParams()
    const { getCar } = useContext(DataContext)

    useEffect(() => {
        getCar(id, setCar)
    }, [])

    return (
        <div>
            <h1>A good choice! I can see you driving around in that thing {id}</h1>
            <Car car={car} />
        </div>
    )
}