import { Outlet, Link } from "react-router-dom"
import mainLogo from '../../images/crown.svg'
import { Fragment } from "react"
import './navigation.styles.scss'


const Navigation = () => {
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
                <Link className="nav-link" to='/sign-in'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation