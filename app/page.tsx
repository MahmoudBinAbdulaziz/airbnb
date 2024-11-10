import Banner from "./componentes/Banner";
import Explore from "./componentes/Explore";
import Footer from "./componentes/Footer";
import GreatestOutdoors from "./componentes/GreatestOutdoors";
import Header from "./componentes/header/Header";
import Live from "./componentes/Live";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Explore />
        <Live />
        <GreatestOutdoors
          img="https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="The Greatest Outdoors"
          desc="Wishlists curated by Airbnb"
          linkText="Get Inspired"
        />
      </main>
    </>
  );
}
