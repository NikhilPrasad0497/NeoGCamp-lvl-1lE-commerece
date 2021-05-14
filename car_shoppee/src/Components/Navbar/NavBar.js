import styles from './NavBar.module.css'
import {Link, useNavigate, useLocation} from 'react-router-dom'
export const NavBar = ()=>{
    return(
        <>
        <nav className={`${styles.nav}`}>
            <div>
               <Link to='/' className={`${styles.link}`}>Home</Link> ||
               <Link to='/cart' className={`${styles.link}`}>Cart</Link> ||
               <Link to='/profile' className={`${styles.link}`}>Account</Link> ||
               <Link to='/login' className={`${styles.link}`}>Login</Link> ||
               <Link to='/signup' className={`${styles.link}`}>Signup</Link>
            </div>
        </nav>
        </>
    )
}