import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import LoginContext from './utils/loginContext';
import LogoutModal from './LogoutModal';

function Header() {
    const navigate = useNavigate()
    const [isSignOut, setIsSignOut] = useState(false)
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)
    
  return (
    <>
        <nav>
            <h1>
                <Link to="/">Trainer</Link>
            </h1>
            <ul>
                {isLoggedIn 
                    ? (
                        <li>
                            <Link className='logout' onClick={() => setIsSignOut(true)}>Log out</Link>
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
        {isSignOut && <LogoutModal closeModal={() => setIsSignOut(false)}/>}
    </>
  )
}

export default Header
