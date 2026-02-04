import React from 'react';

/**
 * PromoBanner Component
 * 
 * A call-to-action section typically placed near the footer 
 * for newsletter subscription.
 */
function PromoBanner() {
    return (
        <section className="px-4 -mb-20 relative z-10 max-w-[1240px] mx-auto">
            <div className="bg-black rounded-[20px] px-6 py-9 md:px-16 md:py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <h2 className="text-white text-[28px] md:text-[40px] font-black leading-tight tracking-tighter uppercase max-w-[551px] mb-2 lg:mb-0">
                    STAY UP TO DATE ABOUT<br className="md:hidden" /> OUR LATEST OFFERS
                </h2>

                <div className="flex flex-col gap-3 w-full sm:w-[350px]">
                    {/* Newsletter Input */}
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full bg-white text-black py-3 pl-12 pr-4 rounded-full outline-none text-sm md:text-base"
                        />
                    </div>

                    <button className="w-full bg-white text-black py-3 rounded-full font-medium text-sm md:text-base hover:bg-white/90 transition-colors">
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
        </section>
    );
}

export default PromoBanner;
