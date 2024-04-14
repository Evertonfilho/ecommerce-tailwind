import Products from "../../components/products";
import Hero from "../../components/hero";
import FeatureCard from "../../components/feature-card";
import StatisticCard from "../../components/statistic-card";


const Home = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col text-center w-full">
        <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">
          PRODUTOS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
          PRODUTOS MAIS POPULARES
        </h1>
      </div>
      <Products />
      <FeatureCard />
      <StatisticCard/>
    </div>
  );
};

export default Home;
