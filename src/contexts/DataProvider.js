import { useState, useEffect, useContext, createContext } from 'react'
import { getFirestore, getDoc, getDocs, collection, collectionGroup, doc, addDoc, Timestamp, query, orderBy } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [cars, setCars] = useState([])
    const { user } =useContext(AuthContext)
    const db = getFirestore()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getCars = async function() {
            const collectionRef = collection(db, 'car')
            const collectionSnap = await getDocs(collectionRef)

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
    useEffect(() => {
        /* fetch('http://127.0.0.1:5000/api/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
                console.log(data)
            }) */
        const getPosts = async function() {
            const collectionRef = collection(db, 'users', user.uid, 'posts')
            // const collectionSnap = await getDocs(collectionRef)
            const q = query(collectionRef, orderBy('dateCreated', 'desc'))
            const collectionSnap = await getDocs(q)

            const postsArr = []

            collectionSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                postsArr.push({
                    ...doc.data(),
                    id: doc.id
                })
            })

            setPosts(postsArr)
        }
        getPosts()
    }, [user])

    const getPost = async function(id, callback) {
        /* fetch(`http://127.0.0.1:5000/api/post/${id}`)
            .then((res) => res.json())
            .then((data) => {
                callback(data)
                console.log(data)
            }) */
        const docRef = doc(db, "posts", id)
        const docSnap = await getDoc(docRef)

        const post = {
            ...docSnap.data(),
            id: docSnap.id
        }

        callback(post)
    }
    
    const addPost = async function(title, body) {
        const post = {
            title: title,
            body: body,
            dateCreated: Timestamp.now()
        }

        const collectionRef = collection(db, 'users', user.uid, 'posts')
        const docRef = await addDoc(collectionRef, post)

        post.id = docRef.id

        setPosts([post, ...posts])
    }

    const getPokemon = async function(pokemonId, callback) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        const data = await res.json()
        callback(data)
        console.log(data)
    }
    
    const value = {
        cars: cars,
        posts:posts,
        getPokemon: getPokemon,
        getCar:getCar,
        getPost:getPost,
        addPost: addPost
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}