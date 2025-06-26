import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Brand Section */}
                    <div className="col-span-2 md:col-span-4">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                                <img src={assets.logo_icon} alt="" className="w-6 h-6" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">ArtifyAI</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Transform your creative vision into stunning digital masterpieces with our advanced AI-powered art platform.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/Divyanshu0230" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-lg">
                                <img src={assets.github_icon} alt="github" className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/divyanshu-pratap-singh-304546251/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-lg">
                                <img src={assets.linkedin_icon} alt="linkedin" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/gallery" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link to="/features" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link to="/buy" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
                                    Plans
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-2 md:col-span-4">
                        <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Stay Updated</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Get the latest updates on new features and AI art trends.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 text-center border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        © {currentYear} <span className="font-semibold text-gray-700">ArtifyAI</span>. All rights reserved. 
                        <span className="ml-2 text-purple-600">Crafted with ❤️ by Divyanshu</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
