function DateText() {
    return (
        <div className="flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-8 md:gap-16">
            <div className="text-center md:text-left">
                <span className="text-[32px] md:text-[50px] font-bold block leading-tight">200+</span>
                <span className="text-[10px] md:text-[12px] text-black/60">International Brands</span>
            </div>

            <div className="text-center md:text-left">
                <span className="text-[32px] md:text-[50px] font-bold block leading-tight">2,000+</span>
                <span className="text-[10px] md:text-[12px] text-black/60">High-Quality Products</span>
            </div>

            <div className="text-center md:text-left">
                <span className="text-[32px] md:text-[50px] font-bold block leading-tight">30,000+</span>
                <span className="text-[10px] md:text-[12px] text-black/60">Happy Customers</span>
            </div>
        </div>
    )
}
export default DateText;