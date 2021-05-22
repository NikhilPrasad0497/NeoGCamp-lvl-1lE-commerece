import styles from './Sidebar.module.css'
export const Sidebar=()=>{
    return (
        <>
        <nav className={`${styles.sidebar}`}>
            <ul>
                <li className={`${styles.list}`}><label>FILTERS</label></li>
                <li><label>PRICE</label></li>
                {/* <li><Checkbox/></li> */}
                <li><label>AVAILABILITY</label></li>
                {/* <li><Checkbox/></li> */}
            </ul>
        </nav>
        </>
    )
}