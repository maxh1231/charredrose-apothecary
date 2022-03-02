import groundCandle from '../../assets/ground-candle.JPG'

const GroundCandle = () => {
    return (
        <div className="flex flex-row-reverse justify-center text-white text-center">
            <div>
                <img src={groundCandle} alt="Higher Candle" className="w-[350px] h-[350px] rounded-full object-cover"></img>
            </div>
            <div>
                <div>
                    <h3>Ground</h3>
                    <span>White Sand</span>
                </div>
                <div>
                    <p><span className="font-bold">Palo Santo</span> for cleansing energy, connection, purification</p>
                    <p><span className="font-bold">White Sage</span> to clear negative energy, purification</p>
                    <p><span className="font-bold">Ash Salt</span> for banshing, protection, warding off negative or evil</p>
                    <p><span className="font-bold">Geodes</span> to absorb all tension, frustration and stress</p>
                    <p><span className="font-bold">Tigers eye</span> aids you to be more calm and centered, and is a strong stone for grounding</p>
                    <p><span className="font-bold">Labradorite Chips</span> for grounding, calming, eases stress and anxiety</p>
                </div>
            </div>
        </div>
    )
}

export default GroundCandle