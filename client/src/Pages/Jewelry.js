import chargedResin from '../assets/charged-resin.JPG'
import resinPendulum2 from '../assets/resin-pendullum2.jpg'
import resinHolder from '../assets/resin-holder.jpg'
import resinPendulum1 from '../assets/resin-pendullum1.jpg'
import evilEye from '../assets/evil-eye.JPG'
import stoneNecklace from '../assets/stone-necklace.jpg'

const Jewelry = () => {
    return (
        <div className="text-white text-center flex flex-col items-center">
            <div className="mt-6">
                <h2 className="mb-8 text-4xl">Resin & Jewelry</h2>
                <p className="text-xl">All resin prodcuts are hand made, charged and cleansed</p>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col ">
                    <div>
                        <img src={chargedResin} alt="Charged resin" className="mx-16 my-12 w-[450px] h-[350px] object-cover"></img>
                    </div>
                    <div>
                        <img src={resinPendulum2} alt="Resin Pendulum" className="mx-16 my-12 w-[450px] h-[350px] object-cover"></img>
                    </div>
                    <div>
                        <img src={resinHolder} alt="Resin holder" className="mx-16 my-12 w-[450px] h-[350px] object-cover"></img>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>
                        <img src={resinPendulum1} alt="Resin Pendulum" className="mx-16 my-12 w-[450px] h-[350px] object-cover"></img>
                    </div>
                    <div>
                        <img src={evilEye} alt="Evil eye" className="mx-16 my-12 w-[450px] h-[350px] object-cover"></img>
                    </div>
                    <div>
                        <img src={stoneNecklace} alt="stoneNecklace" className="mx-16 my-12 w-[450px] h-[350px] object-cover"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jewelry;