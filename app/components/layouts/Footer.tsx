import { Link } from "@remix-run/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import LogoText from "~/assets/svg/LogoText";
import { engagement } from "~/constants/engagement";
import { languages } from "~/constants/languages";
import { partners } from "~/constants/partners";
import { services } from "~/constants/service";
import type LinkType from "~/types/link";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-4 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
          <LogoText />
          <p className="mb-4">
            <strong className="font-medium">PT. Lare Media Teknologi</strong> {t('footerDescription')}
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <RiFacebookLine className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <RiTwitterLine className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <RiInstagramLine className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Link to="https://www.linkedin.com/company/lare-media-teknologi" target="_blank" aria-label="Linkedin">
                <RiLinkedinLine className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - PT. Lare Media Teknologi</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg capitalize">{t('services')} & {t('products')}</p>
          <ul className="text-black-500 ">
            {services.map((service: LinkType, index: number) => (
              <li key={index} className="my-2 hover:text-orange-500 cursor-pointer transition-all capitalize">
                <Link to={service.link}>
                  {t(service.name)}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg capitalize">{t('engage')}</p>
          <ul className="text-black-500">
            {engagement.map((engage: LinkType, index: number) => (
              <li key={index} className="my-2 hover:text-orange-500 cursor-pointer transition-all capitalize">
                <Link to={engage.link}>
                  {t(engage.name)}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg capitalize">{t('partnership')}</p>
          <ul className="text-black-500">
            {partners.map((partner: LinkType, index: number) => (
              <li key={index} className="my-2 hover:text-orange-500 cursor-pointer transition-all capitalize">
                <Link to={partner.link}>
                  {t(partner.name)}{" "}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-black-600 mt-4 mb-2 font-medium text-lg">{t('language')}</p>
          <ul className="text-black-500">
            {languages.map((language: LinkType, index: number) => (
              <li key={index} className="my-2 hover:text-orange-500 cursor-pointer transition-all capitalize">
                <Link to={language.link} reloadDocument>
                  {t(language.name)}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;