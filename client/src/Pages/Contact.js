const Contact = () => {
    return (
        <section className="h-screen text-white flex flex-col items-center justify-evenly">
            <div>
                <h2 className="text-center text-4xl underline underline-offset-8">
                    Contact
                </h2>
                <h3 className="text-center">
                    Send us reviews or products you'd like to see!
                </h3>
            </div>
            <div>
                <div>
                    <input type='text' placeholder="Name" className="w-[250px] h-[40px] text-lg text-black"></input>
                </div>
                <div>
                    <textarea placeholder="Message">

                    </textarea>
                </div>
            </div>
        </section>
    )
}

export default Contact;