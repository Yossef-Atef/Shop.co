import React from "react";
import casualModel from "../assets/casual_model.png";
import formalModel from "../assets/formal_model.png";
import partyModel from "../assets/party_model.png";
import gymModel from "../assets/gym_model.png";

/**
 * ModelGallery Component
 * 
 * A visual grid displaying different clothing styles with featured photography.
 */
function ModelGallery() {
    const styles = [
        { name: "Casual", image: casualModel, span: "md:col-span-1" },
        { name: "Formal", image: formalModel, span: "md:col-span-2" },
        { name: "Party", image: partyModel, span: "md:col-span-2" },
        { name: "Gym", image: gymModel, span: "md:col-span-1" }
    ];

    return (
        <section className="max-w-[1240px] mx-auto px-4 my-10">
            <div className="bg-[#F0F0F0] py-10 px-6 md:py-20 md:px-16 rounded-[20px] md:rounded-[40px]">
                <h2 className="text-3xl md:text-[48px] font-black text-center mb-8 md:mb-16 uppercase tracking-tighter">
                    BROWSE BY DRESS STYLE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {styles.map((style, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-[20px] overflow-hidden group cursor-pointer h-[190px] md:h-[289px] ${style.span}`}
                        >
                            <img
                                src={style.image}
                                alt={`${style.name} Style`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-6 md:top-6 md:left-9">
                                <h3 className="text-2xl md:text-4xl font-bold text-black">{style.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ModelGallery;