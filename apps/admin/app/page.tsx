import { AppAreaChart } from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 p-4 gap-4">
      <div className="p-4 rounded-md lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="p-4 rounded-md">
        <CardList title="Latest Transactions" />
      </div>
      <div className="p-4 rounded-md">Test </div>
      <div className="p-4 rounded-md">Test</div>
      <div className="p-4 rounded-md lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="p-4 rounded-md">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
