import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/scrool_animation";
import ScrollAnimation from "@/components/utils/ScrollAnimation";
import { useTranslation } from "react-i18next";
import HomeTestimonial from "./HomeTestimonial";
import { SiAlibabacloud, SiAmazonaws, SiAnsible, SiCloudflare, SiDigitalocean, SiGooglecloud, SiMicrosoftazure } from "react-icons/si";
import { clients } from "~/constants/clients";
import { Link } from "@remix-run/react";

const HomeClient = () => {
    const { t } = useTranslation("common");
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
            id="projects"
        >
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">

                <div className="flex flex-col w-full my-16">
                    <ScrollAnimation>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto capitalize">
                            {t('clients')}
                        </motion.h3>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
                            {/* Clients */}
                            {clients.map((client, index) => (
                                <img
                                    key={index}
                                    src={client.image}
                                    className="h-14 w-auto mt-4 lg:mt-2"
                                    alt={client.name}
                                />
                            ))}
                        </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto capitalize mt-2 sm:mt-8">
                            {t('partner')}
                        </motion.h3>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
                            {/* Cloud Partner */}
                            <SiAmazonaws className="h-14 w-auto mt-4 lg:mt-2" />
                            <SiAlibabacloud className="h-14 w-auto mt-4 lg:mt-2" />
                            <SiAnsible className="h-14 w-auto mt-4 lg:mt-2" />
                            <SiCloudflare className="h-14 w-auto mt-4 lg:mt-2" />
                            <SiDigitalocean className="h-14 w-auto mt-4 lg:mt-2" />
                            <SiGooglecloud className="h-14 w-auto mt-4 lg:mt-2" />
                            <SiMicrosoftazure className="h-14 w-auto mt-4 lg:mt-2" />
                        </motion.div>
                    </ScrollAnimation>
                </div>
                <div className="flex flex-col w-full my-16" id="testimoni">
                    <ScrollAnimation>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
                            {t('titleTestimonial')}{" "}
                        </motion.h3>
                        <motion.p
                            variants={scrollAnimation}
                            className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
                        >
                            {t('titleTestimonialDescription')}
                        </motion.p>
                    </ScrollAnimation>
                    <ScrollAnimation className="w-full flex flex-col py-12">
                        <motion.div variants={scrollAnimation}>
                            <HomeTestimonial />
                        </motion.div>
                    </ScrollAnimation>
                    <ScrollAnimation className="relative w-full sm:mt-16" id="blog">
                        <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
                            <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                                    <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                        {t('titleNews')}
                                    </h5>
                                    <p>{t('titleNewsDescription')}.</p>
                                </div>
                                <Link to="/news" className="py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-lare-media hover:bg-sky-600 transition-all outline-none">
                                    {t('titleNewsButton')}
                                </Link>
                            </div>
                            <div
                                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                                style={{ filter: "blur(114px)" }}
                            ></div>
                        </motion.div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default HomeClient;