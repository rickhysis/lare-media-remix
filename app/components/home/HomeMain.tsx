import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/scrool_animation";
import ScrollAnimation from "@/components/utils/ScrollAnimation";
import { delivers } from "~/constants/delivers";
import type DeliverType from "~/types/deliver";
import { useTranslation } from "react-i18next";
import { Link } from "@remix-run/react";


export interface HomeMainProps { }

const HomeMain: React.FC<HomeMainProps> = () => {
    const { t } = useTranslation("home");
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="mt-18"
            id="about"
        >
            <ScrollAnimation>
                <motion.div
                    className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-12 py-8 px-2 sm:py-12 bg-lare-media-cover"
                    variants={scrollAnimation}>
                    <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 max-w-screen-xl px-8 xl:px-16 mx-auto">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-100 leading-normal">
                            {t('mainTitle')} <strong>Lare Media</strong>
                        </h1>
                        <p className="text-gray-200 mt-4 mb-6">
                            {t('mainDescription')}
                        </p>
                        <Link
                            target="_blank"
                            to={'https://wa.me/085755010105?text=Hello+lare+media+teknologi'}
                            className="py-3 lg:py-4 px-12 lg:px-16 text-gray-700 font-semibold rounded-lg bg-white hover:bg-gray-200 transition-all outline-none"
                        >
                            {t('mainContact')}
                        </Link>
                    </div>
                    <div className="flex w-full py-2">
                        <motion.div className="h-full w-full" variants={scrollAnimation}>
                            <picture>
                                <source media="(max-width: 799px)" src="/images/bg-1-sm.webp" />
                                <source media="(min-width: 1500px)" src="/images/bg-1-lg.webp" />
                                <img src="/images/bg-1.webp" alt="Lare media technology main" />
                            </picture>
                        </motion.div>
                    </div>
                </motion.div>
            </ScrollAnimation>
            <div className="relative w-full flex max-w-screen-xl px-8 xl:px-16 mx-auto">
                <ScrollAnimation
                    className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
                    {delivers.map((deliver: DeliverType, index: number) => (
                        <motion.div
                            className="flex items-start sm:items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-0 sm:px-4 sm:w-auto mx-auto sm:mx-0"
                            key={index}
                            custom={{ duration: 2 + index }}
                            variants={scrollAnimation}
                        >
                            <div className="flex mx-auto w-40 sm:w-auto">
                                <div className="flex items-center justify-center bg-lare-media w-36 h-36 mr-6 rounded-full">
                                    {React.createElement(deliver.icon, { className: 'text-white w-28 h-28' })}
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-3xl text-black-600 font-bold">
                                        {deliver.number}+
                                    </p>
                                    <p className="text-3xl text-black-500">{deliver.name}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </ScrollAnimation>
                <div
                    className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
                    style={{ filter: "blur(114px)" }}
                ></div>
            </div>
        </div>
    );
};

export default HomeMain;