import { Link } from 'react-router-dom';

function Header({isLoggedIn}) {
  return (
    <nav>
        <h1>
            <Link to="/">Trainer</Link>
        </h1>
        <ul>
            {isLoggedIn 
                ? (
                    <li>
                        <Link to="/logout">Log out</Link>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Log in</Link>
                        </li>
                        <li>
                            <Link to="/signup" className="signup">Sign up</Link>
                        </li>
                    </>
                )
            }
        </ul>
    </nav>
  )
}

export default Header