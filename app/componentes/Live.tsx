import { LiveData } from "../types/app";
import { getLive } from "../utils/api";
import LiveCard from "./LiveCard";

const Live = async () => {
  const liveData: LiveData = await getLive();
  return (
    <section className="pt-6">
      <div className="container ">
        <div className="flex gap-y-4 space-x-3 -ml-3 p-3 scrollable-container overflow-scroll ">
          {liveData.map((item) => (
            <LiveCard key={item.img} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Live;
