import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import HomeMain from "~/components/home/HomeMain";
import Layout from "~/components/layouts/LayoutMain";

export default function Index() {
  let { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('en');
  }, [i18n]);

  return (
    <Layout>
      <HomeMain />
    </Layout>
  );
}
