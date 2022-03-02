import higherCandle from '../../assets/higher-candle.jpg'

const HigherCandle = () => {
    return (
        <div className='flex flex-row text-white justify-center text-center'>
            <div>
                <img src={higherCandle} alt="Higher Candle" className='w-[350px] h-[350px] rounded-full object-cover'></img>
            </div>
            <div>
                <div>
                    <h3>Higher</h3>
                    <span>Dark Amethyst</span>
                </div>
                <div>
                    <p><span className="font-bold">Fluorite</span> to heighten intuitive insights, moves energy, absorbs negative enrgy and self doubt</p>
                    <p><span className="font-bold">Amethyst</span> to awaken your third eye, heighten intuition and release addictions</p>
                    <p><span className="font-bold">Clear Quartz</span> to cleanse and purify the emotional body</p>
                    <p>Healing energy of this stone focuses itself on negativity and stimulates positive energy and thoughts.</p>
                    <p>You will feel emotional balance</p>
                    <p><span className="font-bold">Hibiscuc</span> for passion and love</p>
                    <p><span className="font-bold">Bay</span> to calm the body and mind, adds focus</p>
                </div>
            </div>
        </div>
    )
}

export default HigherCandle