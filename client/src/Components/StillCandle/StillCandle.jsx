import stillCandle from '../../assets/still-candle.JPG'

const StillCandle = () => {
    return (
        <div className="flex flex-row justify-center text-white text-center">
            <div>
                <img src={stillCandle} alt="Higher Candle" className="w-[350px] h-[350px] rounded-full object-cover"></img>
            </div>
            <div>
                <div>
                    <h3>Still</h3>
                    <span>Lavender Chamomile</span>
                </div>
                <div>
                    <p><span className="font-bold">Agate</span> to sooth the nerves and spirit</p>
                    <p><span className="font-bold">Amethyst</span> to stabilize, add peace, balance, rids of negative energy</p>
                    <p><span className="font-bold">Lavender</span> for peace, calming, healing</p>
                    <p><span className="font-bold">Chamomile</span> to ease stress and anxiety, quiets the mind</p>
                    <p><span className="font-bold">Fluorite</span> to heighten intuitize insights, moves energy, absorbs negative energy and self doubt</p>
                </div>
            </div>
        </div>
    )
}

export default StillCandle;