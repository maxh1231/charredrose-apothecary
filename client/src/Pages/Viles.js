import viles1 from '../assets/individual-viles1.JPG'
import viles2 from '../assets/individual-viles2.JPG'

const Viles = () => {
    return (
        <div>
            <div>
                <p>Chamomile</p>
                <p>Marigold</p>
                <p>Tulip</p>
                <p>Rubarb</p>
                <p>Maple Seed Fairy Wings</p>
                <p>Cherry Bark</p>
                <p>Pine</p>
                <p>Walnut Shells</p>
            </div>
            <div>
                <h2>Individual Viles</h2>
                <img src={viles1} alt="individual viles"></img>
                <img src={viles2} alt="individual viles"></img>
            </div>
            <div>
                <p>Lemon</p>
                <p>Orange Peel</p>
                <p>Pomegranate Seed</p>
                <p>Pomegranate Peel</p>
                <p>Lavendar</p>
                <p>Cherry Bay</p>
                <p>Rose Petals</p>
                <p>Hibiscus</p>
            </div>
        </div>
    )
}

export default Viles;