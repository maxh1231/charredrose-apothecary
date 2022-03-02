import hangingFlowers from '../assets/hanging-flowers.JPG';

const Home = () => {
    return (
        <section className='flex flex-col justify-center items-center h-screen text-white'>
            <div>
                <h2 className="text-4xl">Welcome to the Charred Rose Apothecary</h2>
            </div>
            <div className='my-8'>
                <img src={hangingFlowers} alt="Photo of hanging flowers" className='h-[350px] w-[850px] object-cover rounded-lg'></img>
            </div>
            <div>
                <span className="text-lg">All products are hand made, vegan, and cruelty free</span>
            </div>
        </section>
    )
}

export default Home;