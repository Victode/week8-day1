import CarList from "../components/CarList"
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export default function Home() {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>Home</h1>
            {
                (user.loggedIn) ?
                (
                    <>
                        <p>Welcome, { user.username }</p>
                        <CarList />
                    </>
                )
                :
                ''
            }
          
        </div>
    )
}
