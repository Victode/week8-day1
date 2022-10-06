import CarList from "../components/CarList"
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export default function Home() {
    const { user } = useContext(AuthContext)
    return (
        <div className="container">
            <h1>Home</h1>
            {
                (user.loggedIn) ?
                (
                    <>
                        <p>Welcome, { user.username }</p>
                        <h4>These are our current Car selections.</h4>
                        <h5>Feel free to browse through</h5>
                        <CarList />
                    </>
                )
                :
                ''
            }
            
        </div>
    )
}
