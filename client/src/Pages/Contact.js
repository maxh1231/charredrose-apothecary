const Contact = () => {
    return (
        <section className="h-screen text-white flex flex-col items-center ">
            <div>
                <h2 className="text-center text-4xl underline underline-offset-8 my-12 ">
                    Contact
                </h2>
                <h3 className="text-center my-12">
                    Send us reviews or products you'd like to see!
                </h3>
            </div>
            <div className="flex flex-col items-center ">
                <div>
                    <input type='text' placeholder="Name" className="my-4 w-[400px] h-[40px] text-lg text-black"></input>
                </div>
                <div>
                    <textarea placeholder="Message" className="my-4 w-[400px] h-[100px] text-lg text-black">

                    </textarea>
                </div>
                <div>
                    <button className="text-xl border-2 py-2 px-6">Submit</button>
                </div>
            </div>
        </section>
    )
}

export default Contact;