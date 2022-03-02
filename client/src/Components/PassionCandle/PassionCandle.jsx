import passionCandle from '../../assets/passion-candle.jpg'

const PassionCandle = () => {
    return (
        <div className="flex flex-row-reverse justify-center text-white text-center">
            <div>
                <img src={passionCandle} alt="Higher Candle" className="w-[350px] h-[350px] rounded-full object-cover"></img>
            </div>
            <div>
                <div>
                    <h3>Passion</h3>
                    <span>Guava & Passion Fruit</span>
                </div>
                <div>
                    <p><span className="font-bold">Arnet</span> to increase libido, passion and sexuality</p>
                    <p><span className="font-bold">Carnelian Chips</span> to stimulate sexual appetite and open pathways of strong and intense passion</p>
                    <p><span className="font-bold">Red Tigers Eye</span> , the stone of passion and stimulation</p>
                    <p>It's properties are closely connected to the human sex drive</p>
                    <p><span className="font-bold">Rose</span> for beauty, sexually, self love, confidence</p>
                    <p><span className="font-bold">Hibiscus</span> for passion and love</p>
                </div>
            </div>
        </div>
    )
}

export default PassionCandle