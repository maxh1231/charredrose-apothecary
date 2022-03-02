import viles1 from '../assets/individual-viles1.JPG'
import viles2 from '../assets/individual-viles2.JPG'

const Viles = () => {
    return (
        <div className="flex flex-row justify-center items-center text-white">
            <div>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Chamomile</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Marigold</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Tulip</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Rubarb</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Maple Seed Fairy Wings</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Cherry Bark</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Pine</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Walnut Shells</p>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-center my-12">Individual Viles</h2>
                <img src={viles1} alt="individual viles" className="w-[800px] h-[450px] object-cover rounded-lg my-4"></img>
                <img src={viles2} alt="individual viles" className="w-[800px] h-[450px] object-cover rounded-lg my-4"></img>
            </div>
            <div>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Lemon</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Orange Peel</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Pomegranate Seed</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Pomegranate Peel</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Lavendar</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Cherry Bay</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Rose Petals</p>
                <p className="text-xl py-4 px-12 text-center underline underline-offset-8">Hibiscus</p>
            </div>
        </div>
    )
}

export default Viles;