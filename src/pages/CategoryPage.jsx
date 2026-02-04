import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal, ChevronDown, ChevronUp, Check, X } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState('blue');
    const [selectedSize, setSelectedSize] = useState('Large');
    const [selectedSort, setSelectedSort] = useState('Most Popular');

    // Filter categories
    const categories = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
    const colors = [
        { name: 'green', class: 'bg-[#00C12B]' },
        { name: 'red', class: 'bg-[#F50606]' },
        { name: 'yellow', class: 'bg-[#F5DD06]' },
        { name: 'orange', class: 'bg-[#F57906]' },
        { name: 'cyan', class: 'bg-[#06CAF5]' },
        { name: 'blue', class: 'bg-[#063AF5]' },
        { name: 'purple', class: 'bg-[#7D06F5]' },
        { name: 'pink', class: 'bg-[#F506A4]' },
        { name: 'white', class: 'bg-white border border-black/10' },
        { name: 'black', class: 'bg-black' }
    ];
    const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
    const dressStyles = ['Casual', 'Formal', 'Party', 'Gym'];

    // Display products (using existing data and repeating to fill grid for visual match)
    const displayedProducts = useMemo(() => {
        const baseProducts = products.length > 0 ? products : [];
        let results = [...baseProducts];
        // Ensure we have at least 9 products to show a full grid as in the image
        while (results.length < 9 && baseProducts.length > 0) {
            results = [...results, ...baseProducts.map(p => ({ ...p, id: `${p.id}-${results.length}` }))];
        }
        return results.slice(0, 9);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-[1240px] mx-auto px-4 py-4 md:py-6">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-1.5 md:gap-2 text-sm md:text-base text-black/60 mb-4 md:mb-8 border-t border-black/5 pt-5 md:pt-6">
                    <Link to="/" className="hover:text-black">Home</Link>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span className="text-black capitalize font-medium">{categoryName || 'Casual'}</span>
                </nav>

                <div className="flex flex-col md:flex-row gap-6 md:gap-5">
                    {/* Filter Sidebar (Desktop) */}
                    <aside className="hidden md:block w-[295px] border border-black/10 rounded-[20px] p-6 h-fit shrink-0">
                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-black/10">
                            <h2 className="text-xl font-bold">Filters</h2>
                            <SlidersHorizontal className="w-5 h-5 text-black/40" />
                        </div>

                        {/* Category List */}
                        <div className="flex flex-col gap-4 mb-6 pb-6 border-b border-black/10">
                            {categories.map(cat => (
                                <div key={cat} className="flex items-center justify-between text-black/60 hover:text-black cursor-pointer group transition-colors">
                                    <span className="text-base">{cat}</span>
                                    <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                                </div>
                            ))}
                        </div>

                        {/* Price Section */}
                        <div className="mb-6 pb-6 border-b border-black/10">
                            <button className="w-full flex items-center justify-between mb-5 group">
                                <h3 className="text-xl font-bold">Price</h3>
                                <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                            </button>
                            <div className="relative h-[6px] bg-[#F0F0F0] rounded-full mt-8 mb-4 mx-2">
                                <div className="absolute left-[20%] right-[30%] h-full bg-black rounded-full"></div>
                                <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-5 h-5 bg-black rounded-full border-[3px] border-white shadow-sm cursor-pointer -ml-2.5"></div>
                                <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-5 h-5 bg-black rounded-full border-[3px] border-white shadow-sm cursor-pointer -mr-2.5"></div>
                            </div>
                            <div className="flex justify-between font-bold text-sm px-1">
                                <span>$50</span>
                                <span>$200</span>
                            </div>
                        </div>

                        {/* Colors Section */}
                        <div className="mb-6 pb-6 border-b border-black/10">
                            <button className="w-full flex items-center justify-between mb-5 group">
                                <h3 className="text-xl font-bold">Colors</h3>
                                <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                            </button>
                            <div className="flex flex-wrap gap-x-4 gap-y-4">
                                {colors.map(color => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={`w-[37px] h-[37px] rounded-full ${color.class} flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm`}
                                    >
                                        {selectedColor === color.name && (
                                            <Check className={`w-4 h-4 ${color.name === 'white' ? 'text-black' : 'text-white'}`} />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size Section */}
                        <div className="mb-6 pb-6 border-b border-black/10">
                            <button className="w-full flex items-center justify-between mb-5 group">
                                <h3 className="text-xl font-bold">Size</h3>
                                <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                            </button>
                            <div className="flex flex-wrap gap-2">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all ${selectedSize === size
                                            ? 'bg-black text-white'
                                            : 'bg-[#F0F0F0] text-black/60 hover:bg-black/10'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Dress Style Section */}
                        <div className="mb-8 pb-4">
                            <button className="w-full flex items-center justify-between mb-5 group">
                                <h3 className="text-xl font-bold">Dress Style</h3>
                                <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                            </button>
                            <div className="flex flex-col gap-4">
                                {dressStyles.map(style => (
                                    <div key={style} className="flex items-center justify-between text-black/60 hover:text-black cursor-pointer group transition-colors">
                                        <span className="text-base">{style}</span>
                                        <ChevronRight className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-black/90 transition-all active:scale-[0.98]">
                            Apply Filter
                        </button>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-4 md:mb-8 gap-2">
                            <div className="flex items-center md:items-baseline gap-2">
                                <h1 className="text-2xl md:text-[32px] font-bold capitalize leading-none">{categoryName || 'Casual'}</h1>
                                <span className="hidden md:inline text-black/60 text-xs md:text-base whitespace-nowrap">
                                    Showing 1-10 of 100 Products
                                </span>
                            </div>
                            <div className="flex items-center gap-2 md:gap-3">
                                <span className="md:hidden text-black/60 text-sm whitespace-nowrap">
                                    Showing 1-10 of 100 Products
                                </span>
                                <div className="hidden md:flex items-center gap-1">
                                    <span className="text-black/60 text-base">Sort by:</span>
                                    <button className="font-bold text-black inline-flex items-center gap-1 group whitespace-nowrap outline-none">
                                        {selectedSort} <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                                    </button>
                                </div>
                                <button
                                    onClick={() => setIsFilterOpen(true)}
                                    className="md:hidden w-8 h-8 bg-[#F0F0F0] rounded-full flex items-center justify-center hover:bg-black/10 transition-colors shrink-0"
                                >
                                    <SlidersHorizontal className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 md:gap-x-5 md:gap-y-10 border-b border-black/10 pb-6 md:pb-16 mb-5 md:mb-8">
                            {displayedProducts.map(product => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-between pt-2 md:pt-0">
                            <button className="flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2 border border-black/10 rounded-lg text-xs md:text-sm font-medium hover:bg-black/10 transition-all active:scale-95 disabled:opacity-50">
                                <ChevronRight className="w-4 h-4 rotate-180" /> Previous
                            </button>
                            <div className="flex items-center gap-0.5 md:gap-2">
                                {[1, 2, 3, '...', 8, 9, 10].map((page, i) => (
                                    <button
                                        key={i}
                                        className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-xs md:text-sm font-medium transition-all ${page === 1
                                            ? 'bg-black text-white'
                                            : 'hover:bg-black/5 text-black/50 hover:text-black'
                                            } ${page === '...' ? 'cursor-default pointer-events-none' : ''}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                            <button className="flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2 border border-black/10 rounded-lg text-xs md:text-sm font-medium hover:bg-black/10 transition-all active:scale-95">
                                Next <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Filter Drawer */}
            {isFilterOpen && (
                <div className="fixed inset-0 z-[1000] bg-black/40 md:hidden flex flex-col justify-end">
                    <div className="absolute inset-0" onClick={() => setIsFilterOpen(false)} />
                    <div className="relative bg-white rounded-t-[20px] px-5 pt-7 pb-5 max-h-[90vh] overflow-y-auto w-full animate-in slide-in-from-bottom duration-300">
                        <div className="flex items-center justify-between mb-6 pb-5 border-b border-black/10">
                            <h2 className="text-xl font-bold">Filters</h2>
                            <button onClick={() => setIsFilterOpen(false)} className="p-1">
                                <X className="w-6 h-6 text-black/40" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-5 border-b border-black/10 pb-6 mb-6">
                            {categories.map(cat => (
                                <div key={cat} className="flex items-center justify-between text-black/60 text-base">
                                    <span>{cat}</span>
                                    <ChevronRight className="w-4 h-4 opacity-40" />
                                </div>
                            ))}
                        </div>

                        <div className="border-b border-black/10 pb-6 mb-6">
                            <div className="flex justify-between items-center mb-5">
                                <h3 className="text-xl font-bold">Price</h3>
                                <ChevronUp className="w-5 h-5" />
                            </div>
                            <div className="relative h-[6px] bg-[#F0F0F0] rounded-full mt-6 mb-4 mx-2">
                                <div className="absolute left-[20%] right-[30%] h-full bg-black rounded-full"></div>
                                <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-5 h-5 bg-black rounded-full border-[3px] border-white shadow-sm -ml-2.5"></div>
                                <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-5 h-5 bg-black rounded-full border-[3px] border-white shadow-sm -mr-2.5"></div>
                            </div>
                            <div className="flex justify-between font-bold text-sm px-1">
                                <span>$50</span>
                                <span>$200</span>
                            </div>
                        </div>

                        <div className="border-b border-black/10 pb-6 mb-6">
                            <div className="flex justify-between items-center mb-5">
                                <h3 className="text-xl font-bold">Colors</h3>
                                <ChevronUp className="w-5 h-5" />
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-4">
                                {colors.map(color => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={`w-[37px] h-[37px] rounded-full ${color.class} flex items-center justify-center transition-all shadow-sm`}
                                    >
                                        {selectedColor === color.name && (
                                            <Check className={`w-4 h-4 ${color.name === 'white' ? 'text-black' : 'text-white'}`} />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="border-b border-black/10 pb-6 mb-6">
                            <div className="flex justify-between items-center mb-5">
                                <h3 className="text-xl font-bold">Size</h3>
                                <ChevronUp className="w-5 h-5" />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all ${selectedSize === size
                                            ? 'bg-black text-white'
                                            : 'bg-[#F0F0F0] text-black/60'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="pb-8">
                            <div className="flex justify-between items-center mb-5">
                                <h3 className="text-xl font-bold">Dress Style</h3>
                                <ChevronUp className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col gap-4">
                                {dressStyles.map(style => (
                                    <div key={style} className="flex items-center justify-between text-black/60 text-base">
                                        <span>{style}</span>
                                        <ChevronRight className="w-4 h-4 opacity-40" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button onClick={() => setIsFilterOpen(false)} className="w-full bg-black text-white py-4 rounded-full font-medium text-base active:scale-95 transition-transform">
                            Apply Filter
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryPage;

