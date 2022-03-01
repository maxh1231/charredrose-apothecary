import hangingFlowers from '../assets/hanging-flowers.JPG';

const Home = () => {
    return (
        <section className='flex flex-col justify-center items-center h-screen'>
            <div>
                <h2>Welcome to the Charred Rose Apothecary</h2>
            </div>
            <div className=''>
                <img src={hangingFlowers} alt="Photo of hanging flowers" className='h-[350px] w-[850px] object-cover'></img>
            </div>
            <div>
                <span>All products are hand made, vegan, and cruelty free</span>
            </div>
        </section>
    )
}

export default Home;