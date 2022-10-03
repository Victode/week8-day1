import Car from '../components/Car';
import CarInformation from '../components/CarInformation';
import { useState } from 'react';

function Cars() {
  const [cars, setCars] = useState([
    {
        "id": 1,
        "make": "Toyota",
        "information": {
            "model": "Supra",
            "color": "Matte Black",
            "year": 2023
        }
    },
    {
        "id": 2,
        "make": "Ford",
        "information": {
            "model": "Explorer",
            "color": "Silver",
            "year": 2018
        }
    },
    {
        "id": 3,
        "make": "Kia",
        "information": {
            "model": "Forte",
            "color": "white",
            "year": 2015
        }
    },
    {
        "id": 4,
        "make": "Mercedes-Benz",
        "information": {
            "model": "CLS-Class",
            "color": "Black",
            "year": 2021
        }
    }
  ])

  const [carInformation, setCarInformation] = useState(cars[0])


  return (
    <div className="App">
      <header className="App-header">
        <h2>Click on the Car to learn more about it!</h2>
        <CarInformation car={carInformation} />
        <hr />
        { cars.map((car) => <Car clickHandler={setCarInformation} key={car.id} car={car} />) }
      </header>
    </div>
  );
}

export default Cars;
