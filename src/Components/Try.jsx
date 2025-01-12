import React from "react";

function ContactPage() {
    return (
        <div className="bg-gray-100">
            {/* Visit Our Location Section */}
            <section>
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Visit Our Location
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            We're located at Lunar IT Solution Pvt. Ltd. and we'd love to hear from you.
                        </p>
                    </div>
                    <div className="mt-16 lg:mt-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Google Map with the updated location */}
                            <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d87.274399!3d26.6609643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d8b1d73da1d%3A0xd4d57514869ca946!2sLunar+IT+Solution+Pvt.+Ltd.!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                                    width="100%"
                                    height="480"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>

                            {/* Contact Us Form Section */}
                            <div>
                                <div
                                    className="bg-blue-50 p-6 md:p-10 rounded-lg max-w-lg mx-auto my-8 shadow-xl"
                                    style={{
                                        boxShadow:
                                            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                                    }}
                                >
                                    <h1 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                                        Send Us A Message
                                    </h1>
                                    
                                    <form className="space-y-4 mt-6">
                                        <div className="flex flex-col md:flex-row gap-3">
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                required
                                                className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                required
                                                className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm"
                                            />
                                        </div>
                                        <textarea
                                            placeholder="Enter your message"
                                            rows="4"
                                            required
                                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm resize-none"
                                        ></textarea>
                                        <div className="flex justify-center">
                                            <button
                                                type="submit"
                                                className="text-white font-bold py-2 px-4 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 text-sm bg-blue-900 hover:bg-blue-600"
                                            >
                                                SEND
                                            </button>
                                        </div>
                                    </form>
                                    <p className="text-center text-xs text-gray-600 mt-4">
                                        You can email us directly at{" "}
                                        <a
                                            href="mailto:lunaritsolutions@outlook.com"
                                            className="text-blue-500 font-medium hover:underline"
                                        >
                                            lunaritsolutions@outlook.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactPage;
