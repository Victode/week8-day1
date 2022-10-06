import Profile from "../components/Profile"
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import PostList from '../components/PostList'
import PostForm from "../components/PostForm"

export default function ProfileView() {
    const { user } = useContext(AuthContext)
    return (
        <div className="container ">
            <h1 className="mb-3">Profile Page</h1>
            {
                (user.loggedIn) ?
                (
                    <>
                        <h2 className="mb-5">Welcome, { user.username }</h2>
                        <p>This profile page is still currently under maintenance</p>
                        <p>In the meantime, here's a counter to help pass the time </p>
                        <Profile />
                        <PostForm />
                        <PostList />
                    </>
                )
                :
                'You are unable to see user information without login in'
            }
        </div>
    )
}