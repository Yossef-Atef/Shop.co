import React from 'react';
import { Twitter, Facebook, Instagram, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../assets/SHOP.CO.svg";

const Footer = () => {
    const footerLinks = [
        {
            title: "COMPANY",
            links: [
                { name: "Home", href: "/" },
                { name: "Shop", href: "/" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
            ]
        },
        {
            title: "HELP",
            links: [
                { name: "FAQ", href: "/faq" },
                { name: "Returns", href: "/returns" },
                { name: "Shipping", href: "/shipping" },
                { name: "Delivery Details", href: "/delivery" },
            ]
        },
        {
            title: "FAQ",
            links: [
                { name: "Account", href: "/account" },
                { name: "Manage Deliveries", href: "/manage-deliveries" },
                { name: "Orders", href: "/orders" },
                { name: "Payments", href: "/payments" },
            ]
        },
        {
            title: "RESOURCES",
            links: [
                { name: "Free eBooks", href: "/ebooks" },
                { name: "Development Tutorial", href: "/tutorial" },
                { name: "How to - Blog", href: "/blog" },
                { name: "Youtube Playlist", href: "/youtube" },
            ]
        }
    ];

    return (
        <footer className="bg-[#F0F0F0] pt-20 pb-10 relative mt-32">
            {/* Newsletter Section */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1240px] px-4">
                <div className="bg-black rounded-[20px] py-9 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <h2 className="text-white text-[28px] md:text-[40px] font-black leading-tight tracking-tighter uppercase max-w-[551px] mb-2 lg:mb-0">
                        STAY UP TO DATE ABOUT<br className="md:hidden" /> OUR LATEST OFFERS
                    </h2>
                    <div className="flex flex-col gap-3 w-full max-w-[350px]">
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 w-5 h-5" />
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-white rounded-full py-3 pl-12 pr-4 text-black outline-none placeholder:text-black/40"
                            />
                        </div>
                        <button className="w-full bg-white text-black font-medium py-3 rounded-full hover:bg-white/90 transition-colors">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto px-4 mt-16 md:mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-black/10">
                    {/* Brand & Description */}
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        <Link to="/">
                            <img src={Logo} alt="SHOP.CO" className="h-6" />
                        </Link>
                        <p className="text-black/60 text-sm leading-relaxed max-w-[250px]">
                            We have clothes that suits your style and which you're proud to wear. From women to men.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black hover:text-white transition-all text-black">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 bg-black text-white hover:bg-white hover:text-black transition-all">
                                <Facebook className="w-4 h-4 fill-current" />
                            </a>
                            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black hover:text-white transition-all text-black">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black hover:text-white transition-all text-black">
                                <Github className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="flex flex-col gap-6">
                            <h3 className="font-bold text-black tracking-widest text-sm uppercase">
                                {section.title}
                            </h3>
                            <ul className="flex flex-col gap-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-black/60 hover:text-black transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


            </div>
        </footer>
    );
};

export default Footer;
