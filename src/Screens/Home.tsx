import Sidebar from "@/Elements/Sidebar";
import {
  PersonStandingIcon,
  Shell,
  SquareArrowDownLeftIcon,
} from "lucide-react";

const Home = () => {
  return (
    <div className="flex">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <div className="flex ml-auto h-12 w-[80vw] border border-1 p-3">
            <h1 className="text-3xl font-bold ml-auto">WUB</h1>
          </div>
          <div className="flex gap-4 justify-center mt-[100px]">
            <div className="flex items-center p-4 bg-rose-700 gap-3 text-white justify-center rounded-xl">
              <PersonStandingIcon size={100} />
              <div className="flex-col">
                <h3>2,500</h3>
                <p>Customer</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-rose-700  gap-3 text-white justify-center rounded-xl">
              <Shell size={100} />
              <div className="flex-col">
                <h3>2,500</h3>
                <p>Products</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-rose-700 gap-3 text-white justify-center rounded-xl">
              <SquareArrowDownLeftIcon size={100} />
              <div className="flex-col">
                <h3>2,500 Br</h3>
                <p>Seller</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-rose-700 gap-3 text-white justify-center rounded-xl">
              <PersonStandingIcon size={100} />
              <div className="flex-col">
                <h3 className="text-xl font-bold">2,500</h3>
                <p>Money</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
