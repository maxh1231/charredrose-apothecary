import HigherCandle from '../Components/HigherCandle'
import GroundCandle from '../Components/GroundCandle'
import StillCandle from '../Components/StillCandle'

const Candles = () => {
    return (
        <section>
            <div>
                <h2>Candles</h2>
                <span>All candles are custom made with soy wax and eco friendly cotton sick. Each crystal is cleansed and intentions set for each cnadle and its properties.</span>
            </div>
            <HigherCandle />
            <GroundCandle />
            <StillCandle />
        </section>
    )
}

export default Candles;