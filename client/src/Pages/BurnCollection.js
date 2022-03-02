import burnCollection from '../assets/burn-collection1.jpg'
import burnCollection2 from '../assets/burn-collection2.JPG'

const BurnCollection = () => {
    return (
        <section>
            <div className='flex flex-col items-center text-white'>
                <div>
                    <h2>Burn Collection</h2>
                </div>
                <div>
                    <img src={burnCollection} alt="burn collection items" className="w-[850px] h-[350px] object-cover"></img>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center">
                <div>
                    <img src={burnCollection2} alt="Burn collection items" className="w-[500px] h-[650px] object-cover"></img>
                </div>
                <div className="text-white text-center">
                    <div>
                        <h3>Release</h3>
                        <p>Burn this mix when you feel the need to cleanse and start fresh</p>
                        <p><span className="font-bold">Palo Santo</span> for energy cleansing, connection, purification</p>
                        <p><span className="font-bold">White Sage</span> to clear negative energy, purification</p>
                        <p><span className="font-bold">Ash Salt</span> for banshing, protection, warding off negative or evil</p>
                    </div>
                    <div>
                        <h3>Tranquil</h3>
                        <p>Burn this mix when you need to reset and relax, calm or your mind and space</p>
                        <p><span className="font-bold">Lavender</span> for peace, calming, healing</p>
                        <p><span className="font-bold">Bay Leaf</span> to calm the body and mind</p>
                        <p><span className="font-bold">Chamomile</span> to ease stress and anxiety, quiets the mind</p>
                    </div>
                    <div>
                        <h3>Desire</h3>
                        <p>Get in touch with yuor inner sex god or goddess.</p>
                        <p>This burn mix can heighten your sex drive and bring your fantasies to life,</p>
                        <p>burn while manifesting love, desire, and passion</p>
                        <p><span className="font-bold">Rose</span> for beauty, sexuality, self love, confident</p>
                        <p><span className="font-bold">Jasmine</span> for sensuality and romance</p>
                        <p><span className="font-bold">Lavender</span> for devotion, love, happiness</p>
                        <p><span className="font-bold">Pomegranate </span> for feminine energy, passion, intensity, fertility</p>
                        <p><span className="font-bold">Hibiscus </span> for passion and love</p>
                    </div>
                    <div>
                        <h3>Shine</h3>
                        <p>Burn this mix when feeling down.</p>
                        <p>Instant mood boost to bring a ray of light from the clouds</p>
                        <p><span className="font-bold">Lily</span> for passion, desire, flame</p>
                        <p><span className="font-bold">Marigold</span> for prosperity, affection</p>
                        <p><span className="font-bold">Citrust Zest</span> for purification, happiness, removing negative nergy, mood lifting,</p>
                        <p>finding purpose</p>
                    </div>
                    <div>
                        <h3>Midnight Manifest</h3>
                        <p>Burn this mix when you seek confidence and open clarity</p>
                        <p><span className="font-bold">Rose</span> for beauty, sexuality, self love, confidence</p>
                        <p><span className="font-bold">Jasmine</span> for grace</p>
                        <p><span className="font-bold">Sage</span> for widsom, clarity</p>
                        <p><span className="font-bold">Bay</span> for inspiration, widsom</p>
                        <p><span className="font-bold">Palo Santo</span> for creativity</p>
                        <p><span className="font-bold">Pomegranate Peel</span> for spiritual thinking, passion</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BurnCollection;