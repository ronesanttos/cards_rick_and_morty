import './navbar.css'

const NavBar = ({onclick}) => {
    return (
        <nav className='nav'>
            <button alt="Rick and Morty" onClick={onclick}>
                <i>R</i>
                <i>i</i>
                <i>c</i>
                <i>k</i>
                <i>&nbsp;</i>
                <i>a</i>
                <i>n</i>
                <i>d</i>
                <i>&nbsp;</i>
                <i>M</i>
                <i>o</i>
                <i>r</i>
                <i>t</i>
                <i>y</i>
            </button>
        </nav>
    )
}

export default NavBar
