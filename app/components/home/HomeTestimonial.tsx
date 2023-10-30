import React from "react";
import { testimonial } from "~/constants/testimonial";
import StarIcon from "~/assets/svg/StarIcon";
import { useTranslation } from "react-i18next";
import { RiFileUserLine } from "react-icons/ri";

const HomeTestimonial = () => {
    const { t } = useTranslation("home");

    return (
        <div
            className="flex flex-col sm:flex-row items-stretch justify-items-stretch"
        >
            {testimonial.map((testi, index) => (
                <div className="flex items-stretch px-3 py-3 sm:py-0" key={index}>
                    <div className="border-2 border-gray-500 hover:border-lare-media transition-all rounded-lg p-8 flex flex-col">
                        <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                            <div className="flex order-2 xl:order-1">
                                <RiFileUserLine className="w-12 h-12" />
                                <div className="flex flex-col ml-5 text-left">
                                    <p className="text-lg text-black-600 capitalize">
                                        {testi.name}
                                    </p>
                                    <p className="text-sm text-black-500 capitalize">
                                        {testi.role},{testi.company}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                                <p className="text-sm">{testi.rate}/10</p>
                                <span className="flex ml-4">
                                    <StarIcon />
                                </span>
                            </div>
                        </div>
                        <p className="mt-5 text-left">“{t(testi.testimoni)}”.</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomeTestimonial;