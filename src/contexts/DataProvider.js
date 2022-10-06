import { useState, useEffect, useContext, createContext } from 'react'
import { getFirestore, getDoc, getDocs, collection, collectionGroup, doc, addDoc, Timestamp, query, orderBy } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [cars, setCars] = useState([])
    const { user } =useContext(AuthContext)
    const db = getFirestore()

    useEffect(() => {

        const getCars = async function() {
            const collectionRef = collectionGroup(db, 'car')
            const q = query(collectionRef, orderBy('dateCreated', 'desc'))
            const collectionSnap = await getDocs(q)

            const carsArr = []

            collectionSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                carsArr.push({
                    ...doc.data(),
                    id: doc.id
                })
            })

            setCars(carsArr)
        }
        getCars()
    }, [user])
    
    
    
    const getCar = async function(id, callback) {

        const docRef = doc(db, "car", id)
        const docSnap = await getDoc(docRef)

        const car = {
            ...docSnap.data(),
            id: docSnap.id
        }

        callback(car)
    }

    const getPokemon = async function(pokemonId, callback) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        const data = await res.json()
        callback(data)
        console.log(data)
    }
    
    const value = {
        cars: cars,
        getPokemon: getPokemon,
        getCar:getCar
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}