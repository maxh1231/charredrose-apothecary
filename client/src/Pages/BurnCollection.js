import burnCollection from '../assets/burn-collection1.jpg'
import burnCollection2 from '../assets/burn-collection2.JPG'

const BurnCollection = () => {
    return (
        <section>
            <div>
                <div>
                    <h2>Burn Collection</h2>
                </div>
                <div>
                    <img src={burnCollection} alt="burn collection items"></img>
                </div>
            </div>

            <div>
                <div>
                    <img src={burnCollection2} alt="Burn collection items"></img>
                </div>
                <div>
                    <div>
                        <h3>Release</h3>
                        <p>Burn this mix when you feel the need to cleanse and start fresh</p>
                        <p><span>Palo Santo</span> for energy cleansing, connection, purification</p>
                        <p><span>White Sage</span> to clear negative energy, purification</p>
                        <p><span>Ash Salt</span> for banshing, protection, warding off negative or evil</p>
                    </div>
                    <div>
                        <h3>Tranquil</h3>
                        <p>Burn this mix when you need to reset and relax, calm or your mind and space</p>
                        <p><span>Lavender</span> for peace, calming, healing</p>
                        <p><span>Bay Leaf</span> to calm the body and mind</p>
                        <p><span>Chamomile</span> to ease stress and anxiety, quiets the mind</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BurnCollection;