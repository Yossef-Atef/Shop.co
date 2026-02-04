import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, Tag, ArrowRight, ChevronRight } from 'lucide-react';

const CartPage = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        subtotal,
        discountAmount,
        deliveryFee,
        total
    } = useCart();

    return (
        <div className="max-w-[1240px] mx-auto px-4 py-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm md:text-base mb-8 text-black/60">
                <Link to="/" className="hover:text-black">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-black">Cart</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-black mb-8 uppercase">Your Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Cart Items */}
                <div className="lg:col-span-2 border border-black/10 rounded-[20px] p-4 md:p-6 flex flex-col gap-4 md:gap-6">
                    {cartItems.length === 0 ? (
                        <div className="py-10 text-center text-black/60">
                            Your cart is empty. <Link to="/" className="text-black font-bold underline">Go shopping</Link>
                        </div>
                    ) : (
                        cartItems.map((item, index) => (
                            <React.Fragment key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}>
                                <div className="flex gap-4">
                                    <div className="w-[100px] h-[100px] md:w-[124px] md:h-[124px] bg-[#F0EEED] rounded-[10px] overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-contain p-2" />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-base md:text-xl mb-1">{item.title}</h3>
                                                <p className="text-xs md:text-sm text-black">Size: <span className="text-black/60">{item.selectedSize}</span></p>
                                                <p className="text-xs md:text-sm text-black">Color: <span className="text-black/60">{item.selectedColor}</span></p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                                                className="text-red-500 hover:text-red-700 transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5 md:w-6 md:h-6" />
                                            </button>
                                        </div>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-xl md:text-2xl font-bold">${item.price}</span>
                                            <div className="flex items-center gap-3 bg-[#F0F0F0] rounded-full px-4 py-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, -1)}
                                                    className="hover:scale-110 transition-transform"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="font-bold">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, 1)}
                                                    className="hover:scale-110 transition-transform"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {index < cartItems.length - 1 && <hr className="border-black/10" />}
                            </React.Fragment>
                        ))
                    )}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1 border border-black/10 rounded-[20px] p-5 md:p-6 flex flex-col gap-6 h-fit">
                    <h2 className="text-xl md:text-2xl font-bold">Order Summary</h2>

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center text-black/60 text-base md:text-lg">
                            <span>Subtotal</span>
                            <span className="text-black font-bold">${subtotal}</span>
                        </div>
                        <div className="flex justify-between items-center text-black/60 text-base md:text-lg">
                            <span>Discount (-20%)</span>
                            <span className="text-red-500 font-bold">-${discountAmount}</span>
                        </div>
                        <div className="flex justify-between items-center text-black/60 text-base md:text-lg">
                            <span>Delivery Fee</span>
                            <span className="text-black font-bold">${deliveryFee}</span>
                        </div>
                        <hr className="border-black/10" />
                        <div className="flex justify-between items-center text-lg md:text-xl font-bold">
                            <span>Total</span>
                            <span>${total}</span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex-grow flex items-center bg-[#F0F0F0] rounded-full px-4 py-3 gap-2">
                            <Tag className="w-5 h-5 text-black/40" />
                            <input
                                type="text"
                                placeholder="Add promo code"
                                className="bg-transparent outline-none w-full text-sm md:text-base placeholder:text-black/40"
                            />
                        </div>
                        <button className="bg-black text-white px-6 md:px-8 py-3 rounded-full font-medium text-sm md:text-base hover:bg-black/90 transition-all">
                            Apply
                        </button>
                    </div>

                    <button className="w-full bg-black text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-black/90 transition-all text-sm md:text-base">
                        Go to Checkout <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
