import AnalyticsChart from "@/components/BarChart/BarChart";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen container mx-auto">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Dashboard</h1>
      </div>
      <AnalyticsChart/>
    </div>
  );
}