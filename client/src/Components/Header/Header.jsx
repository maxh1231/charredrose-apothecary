import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="flex flex-row justify-around">
            <nav>
                <ul className="flex flex-row">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
            <div>
                <h1>*IMAGE*</h1>
            </div>
            <div>
                <h1>The Charred Rose Apothecary</h1>
            </div>
        </header>
    )
}

export default Header;