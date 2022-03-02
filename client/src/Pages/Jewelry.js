import chargedResin from '../assets/charged-resin.JPG'
import resinPendulum2 from '../assets/resin-pendullum2.jpg'
import resinHolder from '../assets/resin-holder.jpg'
import resinPendulum1 from '../assets/resin-pendullum1.jpg'
import evilEye from '../assets/evil-eye.JPG'
import stoneNecklace from '../assets/stone-necklace.jpg'

const Jewelry = () => {
    return (
        <div>
            <h2>Resin & Jewelry</h2>
            <p>All resin prodcuts are hand made, charged and cleansed</p>
            <div>
                <div>
                    <div>
                        <img src={chargedResin} alt="Charged resin"></img>
                    </div>
                    <div>
                        <img src={resinPendulum2} alt="Resin Pendulum"></img>
                    </div>
                    <div>
                        <img src={resinHolder} alt="Resin holder"></img>
                    </div>
                </div>
                <div>
                    <img src={resinPendulum1} alt="Resin Pendulum"></img>
                </div>
                <div>
                    <img src={evilEye} alt="Evil eye"></img>
                </div>
                <div>
                    <img src={stoneNecklace} alt="stoneNecklace"></img>
                </div>
            </div>
        </div>
    )
}

export default Jewelry;