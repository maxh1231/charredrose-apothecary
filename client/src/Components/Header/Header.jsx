import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="flex flex-row justify-around text-white text-2xl border-b mx-12 py-4">
            <nav>
                <ul className="flex flex-row">
                    <li className="px-4"><Link to='/'>Home</Link></li>
                    <li className="px-4"><Link to='/products'>Products</Link></li>
                    <li className="px-4"><Link to='/contact'>Contact</Link></li>
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