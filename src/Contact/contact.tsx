import img from "../assets/contact.jpg"

export const Contact = () => {

    return (
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
            <div className="text-center">
                <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    Contact
                </span>
            </div>
            <div className="flex flex-wrap justify-center mt-10">
                {/* Form inside */}
            <div className="p-2 w-full lg:w-1/2">
            <h2 className="text-xl sm:text-3xl lg:text-4xl mt-2 lg:mt-4 tracking wide">
                    Lets build something amazing
                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        {" "}
                        together!
                    </span>
                </h2>
                
                <form 
                        className="mt-8 space-y-4 w-full"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-500">
                                Name
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md bg-neutral-900 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-500">
                                Email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md bg-neutral-900 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Your Email"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-500">
                                Message
                            </label>
                            <textarea 
                                id="message" 
                                name="message" 
                               rows={4} 
                                required 
                                className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md bg-neutral-900 text-white placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button 
                                type="submit" 
                                className="w-full px-6 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

            </div>
            {/* Contact information */}
            <div className="p-2 w-full lg:w-1/2">
            <img src={img} alt="contact" className="inset-0 w-full h-full object-cover" />
            </div>
            </div>
        </div>
    )
}
