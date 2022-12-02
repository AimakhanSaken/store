import { Outlet, Link } from "react-router-dom"
import mainLogo from '../../images/crown.svg'
import { Fragment, useContext } from "react"
import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.context"


const Navigation = () => {
  const { currentUser} = useContext(UserContext)

    return (
      <Fragment>
        <div className="navigation ">
            <Link className="logo-container" to='/'>
                <img className="logo" src={mainLogo}/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/hats'>
                    SHOP
                </Link>
                {currentUser ? (
                    <span className='nav-link'> Sign Out </span>)
                    : (<Link className="nav-link" to='/auth'>
                      SIGN IN
                      </Link>
                  )
                }                        
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation