import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Star, Check, Minus, Plus, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState('Large');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('reviews');
    const { addToCart } = useCart();

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedImage(foundProduct.image);
            // Mocking colors and sizes
            setSelectedColor('olive');
            window.scrollTo(0, 0);
        }
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-medium">Product not found.</p>
            </div>
        );
    }

    // Mock related products
    const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

    const colors = [
        { name: 'olive', class: 'bg-[#4B5320]' },
        { name: 'navy', class: 'bg-[#1A2B44]' },
        { name: 'charcoal', class: 'bg-[#313440]' },
    ];

    const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

    const reviews = [
        { id: 1, name: 'Samantha D.', date: 'August 14, 2023', rating: 5, text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." },
        { id: 2, name: 'Alex M.', date: 'August 15, 2023', rating: 5, text: "The t-shirt exceeded my expectations! The color is vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm picky about aesthetics, and this t-shirt definitely gets a thumb up from me." },
        { id: 3, name: 'Ethan R.', date: 'August 16, 2023', rating: 4, text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." },
        { id: 4, name: 'Olivia P.', date: 'August 17, 2023', rating: 5, text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels incredibly comfortable. It's evident that the designer poured their creativity into making this t-shirt stand out." },
    ];

    return (
        <div className="max-w-[1240px] mx-auto px-4 py-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm md:text-base mb-8 text-black/60 overflow-x-auto whitespace-nowrap">
                <Link to="/" className="hover:text-black">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/shop" className="hover:text-black">Shop</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-black">{product.title}</span>
            </nav>

            {/* Main Product Info Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 mb-20">

                {/* Left: Image Gallery */}
                <div className="flex flex-col-reverse md:flex-row gap-4">
                    {/* Thumbnails */}
                    <div className="flex flex-row md:flex-col gap-3 md:gap-4 overflow-x-auto w-[200px]">
                        {[1, 2, 3].map((i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedImage(product.image)}
                                className={`w-[100px] h-[100px] md:w-[152px] md:h-[167px] shrink-0 rounded-[20px] overflow-hidden bg-[#F0EEED] border-2 transition-all ${selectedImage === product.image ? 'border-black' : 'border-transparent'}`}
                            >
                                <img src={product.image} alt="" className="w-full h-full object-contain" />
                            </button>
                        ))}
                    </div>
                    {/* Main Large Image */}
                    <div className="flex-grow bg-[#F0EEED] rounded-[20px] overflow-hidden h-[350px] md:h-[530px]">
                        <img src={selectedImage} alt={product.title} className="w-full h-full object-contain p-8" />
                    </div>
                </div>

                {/* Right: Product Details */}
                <div className="flex flex-col">
                    <h1 className="text-3xl md:text-5xl font-black mb-4 uppercase leading-tight">
                        {product.title}
                    </h1>

                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-[#FFC633] text-[#FFC633]' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>
                        <span className="text-sm font-medium">{product.rating}/<span className="text-black/60">5</span></span>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl font-bold">${product.price}</span>
                        {product.originalPrice && (
                            <>
                                <span className="text-3xl font-bold text-black/30 line-through">${product.originalPrice}</span>
                                <span className="bg-[#FF3333]/10 text-[#FF3333] px-3 py-1.5 rounded-full text-sm font-bold">-{product.discount}%</span>
                            </>
                        )}
                    </div>

                    <p className="text-black/60 mb-8 leading-relaxed max-w-[500px]">
                        {product.description || "This t-shirt which is perfect for any occasion. Crafted from a premium cotton blend, it offers comfort and style."}
                    </p>

                    <hr className="border-black/10 mb-8" />

                    {/* Select Colors */}
                    <div className="mb-8">
                        <h3 className="text-black/60 mb-4">Select Colors</h3>
                        <div className="flex gap-4">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color.name)}
                                    className={`w-9 h-9 rounded-full ${color.class} flex items-center justify-center transition-all`}
                                >
                                    {selectedColor === color.name && <Check className="text-white w-5 h-5" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    <hr className="border-black/10 mb-8" />

                    {/* Choose Size */}
                    <div className="mb-8">
                        <h3 className="text-black/60 mb-4">Choose Size</h3>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all ${selectedSize === size ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black/60 hover:bg-black/5'}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <hr className="border-black/10 mb-8" />

                    {/* Add to Cart Controls */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full px-6 py-3.5 w-[120px] md:w-[170px]">
                            <button
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                className="hover:scale-110 transition-transform"
                            >
                                <Minus className="w-5 h-5" />
                            </button>
                            <span className="font-bold text-lg">{quantity}</span>
                            <button
                                onClick={() => setQuantity(q => q + 1)}
                                className="hover:scale-110 transition-transform"
                            >
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                        <button
                            onClick={() => addToCart(product, quantity, selectedColor, selectedSize)}
                            className="flex-grow bg-black text-white font-medium py-4 rounded-full hover:bg-black/90 transition-all text-sm md:text-base"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="mb-20">
                <div className="flex border-b border-black/10 mb-10 overflow-x-auto whitespace-nowrap">
                    <button
                        onClick={() => setActiveTab('details')}
                        className={`flex-1 text-center py-5 font-medium border-b-2 transition-all ${activeTab === 'details' ? 'border-black text-black' : 'border-transparent text-black/60'}`}
                    >
                        Product Details
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`flex-1 text-center py-5 font-medium border-b-2 transition-all ${activeTab === 'reviews' ? 'border-black text-black' : 'border-transparent text-black/60'}`}
                    >
                        Rating & Reviews
                    </button>
                    <button
                        onClick={() => setActiveTab('faqs')}
                        className={`flex-1 text-center py-5 font-medium border-b-2 transition-all ${activeTab === 'faqs' ? 'border-black text-black' : 'border-transparent text-black/60'}`}
                    >
                        FAQs
                    </button>
                </div>

                {activeTab === 'reviews' && (
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2 text-xl md:text-2xl font-bold">
                                All Reviews <span className="text-black/60 text-sm md:text-base font-normal">({reviews.length})</span>
                            </div>
                            <div className="flex gap-2">
                                <button className="hidden md:flex items-center px-6 py-3 rounded-full bg-[#F0F0F0] font-medium">
                                    Latest <ChevronRight className="w-4 h-4 rotate-90 ml-2" />
                                </button>
                                <button className="bg-black text-white px-6 md:px-8 py-3 rounded-full font-medium text-sm md:text-base">
                                    Write a Review
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-10">
                            {reviews.map((review) => (
                                <div key={review.id} className="p-6 md:p-8 rounded-[20px] border border-black/10 flex flex-col gap-4">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-5 fill-[#FFC633] text-[#FFC633]`} />
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-lg md:text-xl">{review.name}</span>
                                        <div className="bg-[#01AB31] rounded-full p-0.5">
                                            <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                        </div>
                                    </div>
                                    <p className="text-black/60 text-sm md:text-base">"{review.text}"</p>
                                    <span className="text-black/60 font-medium text-sm md:text-base mt-2">Posted on {review.date}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <button className="px-10 py-4 rounded-full border border-black/10 font-bold hover:bg-black/5 transition-all">
                                Load More Reviews
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Related Products Section */}
            <section className="mb-20">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-10 md:mb-14 uppercase">
                    You might also like
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {relatedProducts.map((p) => (
                        <ProductCard key={p.id} {...p} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetailsPage;
