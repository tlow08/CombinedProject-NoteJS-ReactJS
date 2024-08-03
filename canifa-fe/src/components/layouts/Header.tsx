import { useContext } from "react"
import { AuthContext, AuthContextType } from "../../contexts/AuthContext"
import { Link } from "react-router-dom";


const Header = () => {
    const { user, logout} = useContext(AuthContext) as AuthContextType;

  return (
    <header>
        <ul>
            <li><Link to="/">Home</Link></li>
      
        {user ? (
            <>
            <li><p>Welcome, {user?.email}</p></li>
            <li>
                <button onClick={logout}>Logout</button>
            </li>
            {user.role === "admin" && (
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
            )}
            </>

        ):(
            <>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/register">Register</Link>
            </li>
            </>
        )}
        </ul>
    </header>
  )
}

export default Header