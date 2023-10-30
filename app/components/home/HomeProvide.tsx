import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "@/utils/scrool_animation";
import ScrollAnimation from "@/components/utils/ScrollAnimation";
import { useTranslation } from "react-i18next";
import { provides } from "~/constants/provides";

const HomeProvide = () => {
  const { t } = useTranslation("home");
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mt-0 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="service"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-8">
        <ScrollAnimation className="flex w-full justify-end sm:col-span-1">
          <motion.div className="h-full w-full py-8 px-4" variants={scrollAnimation}>
            <img
              src="/images/bg-2.webp"
              alt="Lare media character"
              width={400}
              height={600}
            />
          </motion.div>
        </ScrollAnimation>

        <ScrollAnimation className="sm:col-span-2 ml-3 mt-2">
          <motion.div className="flex flex-col justify-center ml-auto w-full" variants={scrollAnimation}>
            <h2 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              {t('provideTitle')} ?
            </h2>
            <ul className="text-black-500 self-start list-inside py-2">
              {provides.map((provide, index) => (
                <motion.li
                  className="relative py-2 before:left-[-0.7em] before:right-[-0.4em]"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: .2
                    }
                  }}>
                  <p className="after:content-[var(--logo-circle-check)] after:absolute text-2xl font-bold text-gray-700">{t(provide.title)}</p>
                  <p className="text-base text-gray-500">{t(provide.description)}</p>
                </motion.li>
              )
              )}
            </ul>
          </motion.div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default HomeProvide;