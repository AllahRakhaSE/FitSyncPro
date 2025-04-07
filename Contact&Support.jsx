function ContactAndSupport() {
    return (
        <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8 font-serif">
            <h1 className="text-3xl sm:text-4xl font-bold text-black text-center mb-8">Contact & Support Us</h1>
            
            {/* Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 max-w-6xl mx-auto">
                {/* Contact Form - Left Column */}
                <div className="w-full">
                    <form className="w-full border border-gray-300 p-4 sm:p-6 rounded-lg shadow-sm h-full">
                        <div className="mb-4">
                            <label htmlFor="number" className="block text-lg sm:text-xl font-medium text-gray-700 mb-2">Contact Number:</label>
                            <input 
                                type="tel" 
                                id="number" 
                                className="w-full border border-gray-300 text-md p-3 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                                placeholder="Enter phone number"
                            />
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-lg sm:text-xl font-medium text-gray-700 mb-2">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Enter email address" 
                                className="w-full border border-gray-300 text-md p-3 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                                required
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold text-lg p-3 rounded-md transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Social Media Links - Right Column */}
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                        {/* Column 1 */}
                        <div className="space-y-4">
                            <div className="p-3 sm:p-4 hover:bg-gray-100 rounded-lg transition duration-300">
                                <a href="https://www.facebook.com" className="flex items-center text-xl sm:text-xl font-semibold">
                                    <span className="fa fa-facebook text-blue-600 mr-3 text-2xl"></span>
                                    Facebook
                                </a>
                            </div>
                            
                            <div className="p-3 sm:p-4 hover:bg-gray-100 rounded-lg transition duration-300">
                                <a href="https://www.twitter.com" className="flex items-center text-xl sm:text-xl font-semibold">
                                    <span className="fa fa-twitter text-blue-400 mr-3 text-2xl"></span>
                                    Twitter
                                </a>
                            </div>
                            
                            <div className="p-3 sm:p-4 hover:bg-gray-100 rounded-lg transition duration-300">
                                <a href="https://www.linkedin.com" className="flex items-center text-xl sm:text-xl font-semibold">
                                    <span className="fa fa-linkedin text-blue-700 mr-3 text-2xl"></span>
                                    LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <div className="p-3 sm:p-4 hover:bg-gray-100 rounded-lg transition duration-300">
                                <a href="https://www.whatsapp.com" className="flex items-center text-xl sm:text-xl font-semibold">
                                    <span className="fa fa-whatsapp text-green-500 mr-3 text-2xl"></span>
                                    WhatsApp
                                </a>
                            </div>
                            
                            <div className="p-3 sm:p-4 hover:bg-gray-100 rounded-lg transition duration-300">
                                <a href="https://www.instagram.com" className="flex items-center text-xl sm:text-xl font-semibold">
                                    <span className="fa fa-instagram text-pink-600 mr-3 text-2xl"></span>
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactAndSupport;