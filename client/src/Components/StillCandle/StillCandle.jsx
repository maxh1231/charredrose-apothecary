import stillCandle from '../../assets/still-candle.JPG'

const StillCandle = () => {
    return (
        <div>
            <div>
                <img src={stillCandle} alt="Higher Candle"></img>
            </div>
            <div>
                <h3>Still</h3>
            </div>
            <div>
                <span>Lavender Chamomile</span>
            </div>
            <div>
                <p><span>Agate</span> to sooth the nerves and spirit</p>
                <p><span>Amethyst</span> to stabilize, add peace, balance, rids of negative energy</p>
                <p><span>Lavender</span> for peace, calming, healing</p>
                <p><span>Chamomile</span> to ease stress and anxiety, quiets the mind</p>
                <p><span>Fluorite</span> to heighten intuitize insights, moves energy, absorbs negative energy and self doubt</p>
            </div>
        </div>
    )
}

export default StillCandle;