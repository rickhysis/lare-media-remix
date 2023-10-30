import { cssBundleHref } from "@remix-run/css-bundle";
import type { LoaderFunctionArgs, LinksFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import i18next from "~/i18next.server";
import tailwind from "~/styles/tailwind.css";
import stylesheet from "~/styles/shared.css";
import { structuredJsonLD } from "./utils/meta";


export const loader = async ({
  request,
  params
}: LoaderFunctionArgs) => {
  let locale = await i18next.getLocale(request);
  let t = await i18next.getFixedT(request);
  let title = t("title");
  let description = t("description");

  if(params.lang) {
    locale = params.lang
  }
  
  return json({ locale, title, description, params });
}
export let handle = {
  i18n: "common",
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: stylesheet, loader: "sass"},
  { rel: "canonical", lang: 'en', href: 'https://www.lare-media.tech' },
  { rel: "alternate", lang: 'id', href: 'https://www.lare-media.tech/id' },
  { rel: "alternate", lang: 'id', href: 'https://www.lare-media.tech/id' },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: MetaFunction<typeof loader> = ({
  data,
}) => {

  return [
    { title: 'Lare Media Teknologi'},
    { name: "description", content: 'Kami penyedia jasa pembuatan website aplikasi kasir, pos, penjualan, e commerce, web3, nft, erp' },
    { name: "robots", content: 'all' },
    { name: "keywords", content: 'Lare Media Teknologi, konsultan it, kasir, technology, surabaya, software house, pembuatan website, nft, web3, jasa pembuatan, konsultan terbaik, buat website, website murah, aplikasi murah' },
    { name: "og:type", content: 'website' },
    { name: "og:site_name", content: 'Lare Media Teknologi' },
    { name: "og:title", content: 'Lare Media Teknologi - Konsultan teknologi di surabaya' },
    { name: "og:description", content: 'Lare Media Teknologi penyedia jasa pembuatan aplikasi murah' },
    { name: "og:image", content: 'https://www.lare-media.tech/images/logo.png' },
    { name: "og:url", content: 'https://www.lare-media.tech' },
    { name: "twitter:card", content: 'summary_large_image' },
    { name: "og:site", content: '@lare_media_teknologi' },
    { name: "og:title", content: 'Lare Media Teknologi - Konsultan teknologi di surabaya' },
    { name: "og:description", content: 'Lare Media Teknologi penyedia jasa pembuatan aplikasi murah' },
    { name: "og:image", content: 'https://www.lare-media.tech/images/logo.png' },
    { name: "og:url", content: 'https://www.lare-media.tech' },
  ];
};

export default function App() {
  let { locale } = useLoaderData<typeof loader>();
  let { i18n } = useTranslation();

  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <script type="application/ld+json">
          {JSON.stringify(structuredJsonLD())}
        </script>
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


