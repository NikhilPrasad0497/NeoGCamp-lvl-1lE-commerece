import styles  from "./Footer.module.css";

export const Footer = ()=>{
    return <>
        <footer className={`${styles.Footer}`}>
            <h2>Created By</h2>
            <p><a href='https://github.com/NikhilPrasad0497' className={`${styles.link}`}>@NikhilPrasad0497</a></p>
        </footer>
    </>
}