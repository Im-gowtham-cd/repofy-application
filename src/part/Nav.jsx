import NavStyle from './css/Nav.module.css'

export default function Nav() {
    return (
        <>
            <nav className={NavStyle.nav}>
                <h1 className={NavStyle.navTitle}>Repofy</h1>
            </nav>
        </>
    )
}