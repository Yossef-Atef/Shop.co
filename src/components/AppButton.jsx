
function AppButton() {

    return (
        <div className="bg-black text-[#ffffff] w-full md:w-40 h-12 md:h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/90 transition-all active:scale-95">
            <button
                className="w-full h-full font-medium"
                onClick={() => console.log("Shop Now Clicked")}
            >
                Shop Now
            </button>
        </div>
    )
}
export default AppButton;