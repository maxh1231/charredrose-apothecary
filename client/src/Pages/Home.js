import hangingFlowers from '../assets/hanging-flowers.JPG';

const Home = () => {
    return (
        <section>
            <div>
                <h2>Welcome to the Charred Rose Apothecary</h2>
            </div>
            <div>
                <img src={hangingFlowers} alt="Photo of hanging flowers"></img>
            </div>
            <div>
                <span>All products are hand made, vegan, and cruelty free</span>
            </div>
        </section>
    )
}

export default Home;