import HomeClient from "~/components/home/HomeClients";
import HomeMain from "~/components/home/HomeMain";
import HomeProvide from "~/components/home/HomeProvide";
import Layout from "~/components/layouts/LayoutMain";

export default function Index() {
  return (
    <Layout>
      <HomeMain />
      <HomeProvide />
      <HomeClient />
    </Layout>
  );
}
