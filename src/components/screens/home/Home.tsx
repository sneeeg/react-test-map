import Layout from "../../layout/Layout";
import Map from "./Map";
import InfoBanner from "./InfoBanner";
import CurrentCity from "./CurrentCity";

const Home = () => {
  return (
    <Layout>
      <CurrentCity />
      <InfoBanner />
      <Map />
    </Layout>
  )
}

export default Home